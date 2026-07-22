export default function ScarcityNote({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-sans text-[11px] tracking-wide opacity-50 ${className}`}
    >
      Sınırlı sayıda işletme ile çalışıyoruz.
    </p>
  );
}
