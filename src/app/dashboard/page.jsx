import SearchSkeleton from "@/components/SearchSkeleton";
export default function Page() {
  return (
    <div className="item-center mt-20 flex h-screen w-screen justify-center gap-4">
      <div className="h-full w-full">
        <SearchSkeleton />
      </div>
    </div>
  );
}
