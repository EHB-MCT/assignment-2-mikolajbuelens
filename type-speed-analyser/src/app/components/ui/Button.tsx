interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ className, text, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-blue-700 text-white hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
