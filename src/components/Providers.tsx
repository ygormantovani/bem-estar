"use client";
import { MotionConfig } from "motion/react";

/** Respeita a preferência "reduzir movimento" do sistema do visitante. */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
