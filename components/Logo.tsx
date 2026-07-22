import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({
  variant = "dark",
  className = "",
  showWordmark = true,
}: LogoProps) {
  const wordmarkSrc =
    variant === "light"
      ? "/brand/logo-wordmark-light.png"
      : "/brand/logo-wordmark-dark.png";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/logo-icon.png"
        alt={showWordmark ? "" : "Ciloglu Digital"}
        width={749}
        height={626}
        priority
        className="h-9 w-auto shrink-0 sm:h-10"
      />
      {showWordmark && (
        <Image
          src={wordmarkSrc}
          alt="Ciloglu Digital"
          width={988}
          height={302}
          priority
          className="h-7 w-auto sm:h-8"
        />
      )}
    </span>
  );
}
