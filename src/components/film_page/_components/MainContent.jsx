export default function MainContent({ children }) {
  return (
    <div className="z-10 flex h-full w-full shrink-0 flex-col items-center justify-center gap-y-3 p-3 md:flex-row md:items-start md:justify-start">
      {children}
    </div>
  );
}
