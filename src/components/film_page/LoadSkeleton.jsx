import { Skeleton } from "@/components/ui/Skeleton";

export default function LoadSkeleton() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="mt-40 flex h-full w-full max-w-[1250px] flex-wrap items-center justify-start md:mt-96">
        <div className="z-10 flex h-full w-full shrink-0 flex-col items-center justify-center gap-y-3 md:flex-row md:items-start md:justify-start">
          <Skeleton className="flex w-full flex-col items-center justify-center gap-1 rounded-lg bg-transparent p-3 md:flex-row md:items-start md:justify-start md:bg-slate-900 md:p-0">
            <Skeleton className="aspect-9/16 h-[450px] w-[300px] shrink-0 rounded-lg bg-slate-900 md:mr-10 md:rounded-none md:rounded-l-lg md:bg-slate-800" />
            <Skeleton className="mt-3 flex w-full flex-col bg-slate-900 p-3 md:mt-6 md:bg-transparent md:p-0">
              <Skeleton className="mb-2 h-9 w-96 bg-slate-950" />
              <div className="flex gap-x-1.5">
                <Skeleton className="h-7 w-28 bg-slate-950" />
                <Skeleton className="h-7 w-32 bg-slate-950" />
              </div>
              <div className="mt-3.5 flex gap-1 md:mt-3">
                <Skeleton className="h-8 w-16 rounded-md bg-slate-950 p-2" />
                <Skeleton className="h-8 w-16 rounded-md bg-slate-950 p-2" />
                <Skeleton className="h-8 w-32 rounded-md bg-slate-950 p-2" />
              </div>
              <Skeleton className="mt-4 h-7 w-44 bg-slate-950 md:mt-8 md:h-9 md:w-48" />
              <Skeleton className="mt-3 h-28 w-full bg-slate-950 md:h-40 md:w-[85%]" />
            </Skeleton>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
