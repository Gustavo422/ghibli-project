export default function PageLayout({ children }) {
  return (
    <div className="mt-64 flex h-full w-full flex-wrap items-center justify-start md:mt-80 md:pl-0 lg:pl-20">
      {children}
    </div>
  );
}
