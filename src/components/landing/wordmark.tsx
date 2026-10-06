/**
 * Wordmark brand GROOM!X — mengikuti logo asli di dinding studio:
 * "O" kedua berubah menjadi simbol ∞, dengan aksen "!" sebelum X.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-[0.06em] ${className}`}>
      <span className="sr-only">Groomix</span>
      <span aria-hidden="true">
        GR<span className="text-brass">∞</span>M<span className="text-brass">!</span>X
      </span>
    </span>
  );
}
