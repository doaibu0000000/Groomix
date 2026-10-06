"use client";

import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** delay dalam detik */
  delay?: number;
  /** jarak geser awal (px) */
  y?: number;
};

/**
 * Animasi reveal halus saat elemen masuk viewport.
 * Preferensi reduced-motion ditangani MotionConfig (perilaku runtime),
 * bukan lewat prop initial — kalau initial bergantung pada
 * useReducedMotion, HTML hasil SSR tidak cocok dengan client
 * (hydration mismatch).
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-64px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
