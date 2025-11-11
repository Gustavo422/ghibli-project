import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import FreshTomatoIcon from "@/components/ui/svg/FreshTomatoIcon.svg";
import RottenTomatoIcon from "@/components/ui/svg/RottenTomatoIcon.svg";
import { getFilmForId } from "@/lib/api";
import { CalendarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";

export default async function FilmPage({ params }) {
  const { id } = await params;
  const datas = await getFilmForId(
    id,
    "movie_banner",
    "image",
    "title",
    "original_title",
    "original_title_romanised",
    "rt_score",
    "release_date",
    "description",
    "running_time",
  );

  let iconValue = FreshTomatoIcon;
  const score = parseInt(datas?.rt_score);
  if (!isNaN(score)) {
    iconValue = score < 60 ? RottenTomatoIcon : FreshTomatoIcon;
  }
  return (
    <div className="relative h-full w-full">
      <div className="mt-64 flex h-full w-full flex-wrap items-center justify-start md:mt-80 md:pl-0 lg:pl-20">
        <div className="absolute top-0 left-0 h-full w-full">
          <Image
            quality={20}
            fill
            src={datas?.movie_banner}
            priority
            alt={`Banner of the movie with id: ${id}`}
            className="z-0 object-cover"
          />
          <div className="absolute bottom-0 left-0 z-1 h-screen w-full bg-linear-to-t from-slate-950 via-slate-950/90 to-slate-900/85" />
        </div>

        <div className="z-10 flex h-full w-full shrink-0 flex-col items-center justify-center gap-y-3 p-3 md:flex-row md:items-start md:justify-start">
          <div className="relative h-[550px] w-[365px] shrink-0 cursor-pointer md:mr-10 md:h-[450px] md:w-[300px] md:pl-0">
            <Image
              width={365}
              height={550}
              style={{
                width: "100%",
                height: "100%",
              }}
              src={datas?.image}
              alt={"Main Image"}
              className="border-accent-foreground/60 rounded-lg border-2 brightness-75 transition-all duration-400 ease-out hover:scale-[1.01] hover:border-white hover:brightness-50"
            />
          </div>

          <div className="bg-accent-foreground/80 border-accent-foreground flex w-full flex-col gap-1 rounded-md border p-2 md:border-none md:bg-transparent">
            <div className="gap-y-1">
              <h1 className="font-serif text-2xl font-bold text-slate-200 font-stretch-extra-expanded md:text-3xl">
                {datas?.title}
              </h1>
              <p className="text-ring flex gap-x-1.5 text-base md:gap-x-3 md:text-lg">
                <span className="rocknroll font-light">
                  {datas?.original_title}
                </span>
                <span className="font-medium">
                  ({datas?.original_title_romanised})
                </span>
              </p>
              <div className="mt-3.5 flex w-full flex-wrap gap-x-3">
                <Badge
                  className="border-ring flex h-8 items-center justify-center gap-x-1.5 rounded-md border bg-slate-900 p-2 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-950 md:h-9"
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
                    {datas?.rt_score}%
                  </p>
                </Badge>

                <Badge
                  className="border-ring flex h-8 items-center justify-center gap-x-1.5 rounded-md border bg-slate-900 p-2 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-950 md:h-9"
                  variant="default"
                >
                  <CalendarIcon className="h-4 w-4" />
                  <p className="text-[16px] font-medium text-slate-200 font-stretch-200%">
                    {datas?.release_date}
                  </p>
                </Badge>
                <Badge
                  className="border-ring flex h-8 items-center justify-center gap-x-1.5 rounded-md border bg-slate-900 p-2 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-950 md:h-9"
                  variant="default"
                >
                  <TimerIcon className="h-[18px] w-[18px]" />
                  <p className="text-[16px] text-slate-200 font-stretch-200%">
                    <span className="pr-0.5">{datas?.running_time}</span>minutes
                  </p>
                </Badge>
              </div>
            </div>
            <Separator className="mt-4 mb-2 w-full bg-slate-600 sm:w-[95%] md:w-[90%]" />
            <h3 className="text-xl font-medium text-slate-200 md:text-2xl">
              Description:
            </h3>
            <p className="text-ring max-w-4xl">{datas?.description}</p>
          </div>
        </div>
      </div>
      {/*<div className="h-screen w-full bg-slate-950"></div>*/}
    </div>
  );
}
