export default function MainCard({ children }) {
  return (
    <div className="md:bg-accent-foreground/20 group md:border-accent-foreground flex flex-col items-center justify-center gap-y-3 transition-colors duration-1000 ease-out md:flex-row md:items-start md:justify-start md:rounded-md md:border md:backdrop-blur-xs md:hover:brightness-90">
      {children}
    </div>
  );
}
