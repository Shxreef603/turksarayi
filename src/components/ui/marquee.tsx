"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      {...props}
      onClick={() => setIsPaused(!isPaused)}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:30s] [--gap:2rem] [flex-direction:row] cursor-pointer gap-[var(--gap)]",
        {
          "[flex-direction:column]": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "[animation-direction:reverse]": reverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
            style={{
              animationPlayState: isPaused ? "paused" : undefined,
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
