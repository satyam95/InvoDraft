interface FeatureBadgeProps {
  text: string;
  showCircle?: boolean;
}

export function FeatureBadge({ text, showCircle = false }: FeatureBadgeProps) {
  return (
    <div className="py-2 px-4 flex items-center gap-3 border rounded-full border-2 border-[#E3E6FB] max-w-fit">
      {showCircle && (
        <div className="bg-[linear-gradient(90deg,#08186A_100%)] h-2.5 w-2.5 rounded-full" />
      )}
      <div className="text-lg font-semibold text-gradient">{text}</div>
    </div>
  );
}
