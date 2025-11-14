export default function InfoSession({ children }) {
  return (
    <div className="bg-accent-foreground/80 border-accent-foreground flex w-full flex-col gap-1 rounded-md border p-2 md:border-none md:bg-transparent">
      {children}
    </div>
  );
}
