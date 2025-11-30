export default function HighlitedElements({
  title,
  original_title,
  original_title_romanised,
  children,
}) {
  return (
    <div className="gap-y-1 md:mt-6">
      <h1 className="text-accent font-serif text-2xl font-bold font-stretch-extra-expanded md:text-3xl">
        {title}
      </h1>
      <p className="text-ring flex flex-wrap gap-x-1.5 text-base md:gap-x-3 md:text-lg">
        <span className="rocknroll font-light">{original_title}</span>
        <span className="font-medium">({original_title_romanised})</span>
      </p>
      {children}
    </div>
  );
}
