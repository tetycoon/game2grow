import type { CSSProperties } from "react";

const butterflies = [
  { left: "6%", delay: "0s", duration: "22s", size: "16px" },
  { left: "18%", delay: "4s", duration: "26s", size: "14px" },
  { left: "33%", delay: "2s", duration: "24s", size: "18px" },
  { left: "51%", delay: "7s", duration: "28s", size: "15px" },
  { left: "66%", delay: "1s", duration: "23s", size: "17px" },
  { left: "79%", delay: "6s", duration: "27s", size: "13px" },
  { left: "91%", delay: "3s", duration: "25s", size: "16px" }
];

export function Butterflies() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      {butterflies.map((b) => (
        <span
          key={`${b.left}-${b.delay}`}
          className="butterfly-float absolute"
          style={
            {
              left: b.left,
              animationDelay: b.delay,
              animationDuration: b.duration,
              fontSize: b.size
            } as CSSProperties
          }
        >
          🦋
        </span>
      ))}
    </div>
  );
}
