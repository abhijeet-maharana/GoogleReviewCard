interface GoogleLogoProps {
  size?: "small" | "medium" | "large";
}

export function GoogleLogo({ size = "medium" }: GoogleLogoProps) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-4xl"
  };

  return (
    <div className={`font-bold ${sizeClasses[size]}`}>
      <span className="text-google-blue">G</span>
      <span className="text-google-red">o</span>
      <span className="text-google-yellow">o</span>
      <span className="text-google-blue">g</span>
      <span className="text-google-green">l</span>
      <span className="text-google-red">e</span>
    </div>
  );
}
