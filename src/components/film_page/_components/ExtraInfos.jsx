export default function ExtraInfos({ children }) {
  return (
    <div className="bg-accent-foreground/10 border-accent-foreground flex w-full flex-col items-center justify-center rounded-b-md border-x border-b p-2 pl-4 md:border-none md:bg-transparent md:pl-0">
      {children}
    </div>
  );
}
