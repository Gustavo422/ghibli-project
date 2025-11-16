export default function PageLayout({ children }) {
  return (
    <div className="mt-40 flex h-full w-full items-center justify-center md:mt-96 md:pl-0">
      {children}
    </div>
  );
}
