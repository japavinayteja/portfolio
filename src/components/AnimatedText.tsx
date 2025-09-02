interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ text, className = "", delay = 0.1 }: AnimatedTextProps) => {
  return (
    <span className={`text-gradient ${className}`}>
      {text.split('').map((letter, index) => (
        <span 
          key={index}
          className="letter-flash"
          style={{
            animationDelay: `${index * delay}s`,
            animationIterationCount: 'infinite',
            animationDuration: '3s'
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;