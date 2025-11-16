import { Badge } from "@/components/ui/Badge";
import { CalendarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";

export default function FilmsBadges({
  iconValue,
  rt_score,
  release_date,
  running_time,
}) {
  return (
    <div className="mt-3.5 flex w-full flex-wrap gap-x-3">
      <Badge
        className="border-ring/50 hover:border-accent-foreground flex h-8 cursor-pointer items-center justify-center gap-x-1.5 rounded-md border bg-slate-950/20 p-2 transition-all duration-400 hover:scale-105 hover:bg-slate-950/10 md:h-9"
        variant="default"
      >
        <div className="relative h-4 w-4">
          <Image
            fill
            src={iconValue}
            alt={`${iconValue.toString().replace("T", " T")} Icon`}
          />
        </div>
        <p className="text-[16px] font-medium text-slate-200 font-stretch-200%">
          {rt_score}%
        </p>
      </Badge>

      <Badge
        className="border-ring/50 hover:border-accent-foreground flex h-8 cursor-pointer items-center justify-center gap-x-1.5 rounded-md border bg-slate-950/20 p-2 transition-all duration-400 hover:scale-105 hover:bg-slate-950/10 md:h-9"
        variant="default"
      >
        <CalendarIcon className="h-4 w-4" />
        <p className="text-[16px] font-medium text-slate-200 font-stretch-200%">
          {release_date}
        </p>
      </Badge>
      <Badge
        className="border-ring/50 hover:border-accent-foreground flex h-8 cursor-pointer items-center justify-center gap-x-1.5 rounded-md border bg-slate-950/20 p-2 transition-all duration-400 hover:scale-105 hover:bg-slate-950/10 md:h-9"
        variant="default"
      >
        <TimerIcon className="h-[18px] w-[18px]" />
        <p className="text-[16px] text-slate-200 font-stretch-200%">
          <span className="pr-0.5">{running_time}</span>minutes
        </p>
      </Badge>
    </div>
  );
}
