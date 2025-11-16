export default function MainContent({ children }) {
  return (
    <div className="z-10 flex h-full w-full shrink-0 flex-col items-center justify-center p-3">
      {children}
    </div>
  );
}
