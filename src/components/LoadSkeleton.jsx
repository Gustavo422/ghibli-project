import { Skeleton } from "@/components/ui/Skeleton";

export default function LoadSkeleton() {
  return (
    <div className="flex h-full w-full">
      <div className="mt-64 flex h-full w-full flex-wrap items-center justify-start md:mt-80 md:pl-0 lg:pl-20">
        <div className="z-10 flex h-full w-full shrink-0 flex-col items-center justify-center gap-y-3 p-3 md:flex-row md:items-start md:justify-start">
          <Skeleton className="h-[550px] w-[365px] bg-slate-900 md:mr-10 md:h-[450px] md:w-[300px] md:pl-0" />
          <Skeleton className="flex w-full flex-col gap-1 border border-slate-800 bg-slate-800/80 p-2 md:border-none md:bg-transparent">
            <Skeleton className="mb-1 h-9 w-96 bg-slate-900" />
            <div className="flex gap-x-1.5">
              <Skeleton className="h-7 w-28 bg-slate-900" />
              <Skeleton className="h-7 w-28 bg-slate-900" />
            </div>
            <div className="mt-3.5 flex gap-1 md:mt-3">
              <Skeleton className="h-8 w-14 rounded-md bg-slate-900 p-2 md:h-9" />
              <Skeleton className="h-8 w-14 rounded-md bg-slate-900 p-2 md:h-9" />
              <Skeleton className="h-8 w-20 rounded-md bg-slate-900 p-2 md:h-9" />
            </div>
            <Skeleton className="mt-4 h-7 w-44 bg-slate-900 md:mt-8 md:w-48" />
            <Skeleton className="mt-5 h-28 w-[90%] bg-slate-900 md:w-[60%]" />
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
