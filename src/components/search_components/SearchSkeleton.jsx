import { Skeleton } from "@/components/ui/Skeleton";

export default function SearchSkeleton() {
  return (
    <div className="flex h-full w-full">
      <Skeleton className="relative mr-2 aspect-2/3 h-[78px] w-14 bg-slate-700" />
      <Skeleton className="flex h-[78px] w-full flex-col bg-slate-900 p-2 px-3">
        <Skeleton className="h-6 w-full bg-slate-600" />
        <Skeleton className="mt-2 h-8 w-full bg-slate-600" />
      </Skeleton>
    </div>
  );
}
