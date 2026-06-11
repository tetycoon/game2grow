type Props = {
  items: readonly string[];
};

export function TopicMarquee({ items }: Props) {
  const leftLoopItems = [...items, ...items];
  const rightLoopItems = [...items].reverse().concat([...items].reverse());

  return (
    <div className="space-y-3">
      <div className="topic-marquee-shell">
        <div className="topic-marquee-track topic-marquee-track-left">
          {leftLoopItems.map((topic, index) => (
            <span
              key={`left-${topic}-${index}`}
              className="whitespace-nowrap rounded-full border border-brandGold/35 bg-black/40 px-3 py-1.5 text-xs text-zinc-200 sm:px-4 sm:py-2 sm:text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="topic-marquee-shell">
        <div className="topic-marquee-track topic-marquee-track-right">
          {rightLoopItems.map((topic, index) => (
            <span
              key={`right-${topic}-${index}`}
              className="whitespace-nowrap rounded-full border border-brandGold/35 bg-black/40 px-3 py-1.5 text-xs text-zinc-200 sm:px-4 sm:py-2 sm:text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
