"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

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
      {Array.from({ length: repeat }).map((_, groupIdx) => (
        <div
          key={`marquee-group-${groupIdx}`}
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
          {React.Children.map(children, (child, itemIdx) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                key: `marquee-${groupIdx}-${child.key ?? itemIdx}`,
              } as React.Attributes);
            }
            return child;
          })}
        </div>
      ))}
    </div>
  );
}
