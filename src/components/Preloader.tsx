import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const sequence = [
      { text: "[sys] Initializing IT/OT Bridge...", delay: 200 },
      { text: "[sys] Initializing IT/OT Bridge...\n[net] Connecting to infrastructure...", delay: 600 },
      { text: "[sys] Initializing IT/OT Bridge...\n[net] Connecting to infrastructure...\n[sec] Establishing secure handshake...", delay: 1000 },
      { text: "[sys] Initializing IT/OT Bridge...\n[net] Connecting to infrastructure...\n[sec] Establishing secure handshake...\n[ok] Access granted. Loading layout...", delay: 1400 }
    ];

    sequence.forEach((step, index) => {
      setTimeout(() => {
        setText(step.text);
        if (index === sequence.length - 1) {
          setTimeout(() => {
            setPhase(1); // Fade out phase
            setTimeout(() => {
              onComplete();
            }, 500); // Wait for fade out
          }, 600);
        }
      }, step.delay);
    });
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${phase === 1 ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <svg viewBox="0 0 140 40" width="160">
            <text x="0" y="28" fontFamily="var(--font-display)" fontSize="28" fontWeight="700" fill="#ffffff">IT</text>
            <text x="34" y="28" fontFamily="var(--font-display)" fontSize="28" fontWeight="700" fill="var(--cyan)">ONE</text>
            <text x="0" y="38" fontFamily="var(--font-mono)" fontSize="7" fontWeight="500" letterSpacing="1.5" fill="rgba(255, 255, 255, 0.35)">SERVICIOS + TECNOLOGÍA</text>
          </svg>
        </div>
        <pre className="preloader-terminal">{text}</pre>
      </div>
    </div>
  );
};

export default Preloader;
