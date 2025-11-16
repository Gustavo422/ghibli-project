export default function InfoSession({ children }) {
  return (
    <div className="bg-accent-foreground/10 group border-accent-foreground flex w-full flex-col rounded-t-md border-x border-t p-2 pl-4 backdrop-blur-xs md:border-none md:bg-transparent md:pl-0 md:backdrop-blur-none">
      {children}
    </div>
  );
}
