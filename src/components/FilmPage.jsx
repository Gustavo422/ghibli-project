import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import FreshTomatoIcon from "@/components/ui/svg/FreshTomatoIcon.svg";
import RottenTomatoIcon from "@/components/ui/svg/RottenTomatoIcon.svg";
import getFilms from "@/lib/api";
import { CalendarIcon, TimerIcon } from "lucide-react";

import Image from "next/image";

export default async function FilmPage({ params }) {
  const { id } = await params;
  const allDatas = await getFilms("all", id);

  let iconValue = FreshTomatoIcon;
  const score = parseInt(allDatas?.rt_score);
  if (!isNaN(score)) {
    iconValue = score < 60 ? RottenTomatoIcon : FreshTomatoIcon;
  }
  return (
    <div className="min-h-full min-w-full">
      <div className="flex min-h-full min-w-full flex-col items-start justify-start">
        <div className="relative flex h-screen w-screen flex-row items-start justify-center">
          <div className="relative top-0">
            <div className="absolute h-screen w-screen">
              <Image
                quality={20}
                fill
                src={allDatas?.movie_banner}
                priority
                alt={`Banner of the movie with id: ${id}`}
                className="z-0 object-cover"
              />
              <div className="absolute bottom-0 left-0 z-1 h-screen w-full bg-linear-to-t from-slate-950 via-slate-950/90 to-slate-900/85" />
            </div>
          </div>
          <div className="z-10 mt-36 flex h-full w-full flex-col items-center justify-center md:mt-80 md:pt-10">
            <div className="flex h-screen w-screen flex-col lg:w-[80%] lg:flex-row">
              <div className="relative h-[450px] w-[300px] shrink-0 pl-3 lg:mr-10 lg:h-96 lg:w-[255px] lg:pl-0">
                <Image
                  width={300}
                  height={450}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={allDatas?.image}
                  alt={"Main Image"}
                  className="rounded-lg border-white hover:border-2 hover:saturate-[.25]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="mt-3 pl-3 text-xl font-bold lg:pl-0 lg:text-3xl">
                  {allDatas?.title}
                </h1>
                <p className="mt-2 flex flex-col pb-3 pl-3 text-sm sm:flex-row sm:text-base md:text-lg lg:mt-0 lg:gap-x-3 lg:pl-0">
                  <span className="rocknroll">{allDatas?.original_title}</span>
                  <span className="font-bold">
                    ({allDatas?.original_title_romanised})
                  </span>
                </p>
                <Separator className="bg-slate-100/90" />
                <div className="mt-2 flex w-full flex-wrap gap-2 pl-3 lg:pl-0">
                  <Badge
                    className="gap-x-1 rounded-full border border-white bg-slate-900 p-2 hover:bg-slate-950"
                    variant="default"
                  >
                    <div className="relative h-3 w-3 lg:h-[15px] lg:w-[15px]">
                      <Image
                        fill
                        src={iconValue}
                        alt={`${iconValue.toString().replace("T", " T")} Icon`}
                      />
                    </div>
                    <p className="text-[14px] font-medium font-stretch-200% lg:text-[15px]">
                      {allDatas?.rt_score}%
                    </p>
                  </Badge>
                  <Badge
                    className="gap-x-1 rounded-full border border-white bg-slate-900 p-2 hover:bg-slate-950"
                    variant="default"
                  >
                    <CalendarIcon className="h-3 w-3 lg:h-3.5 lg:w-3.5" />
                    <p className="text-[14px] font-medium font-stretch-200% lg:text-[15px]">
                      {allDatas?.release_date}
                    </p>
                  </Badge>
                  <Badge
                    className="gap-x-1 rounded-full border border-white bg-slate-900 p-2 hover:bg-slate-950"
                    variant="default"
                  >
                    <TimerIcon className="h-3.5 w-3.5 lg:h-[15px] lg:w-[15px]" />
                    <p className="text-[14px] font-medium font-stretch-200% lg:text-[15px]">
                      {allDatas?.running_time} minutes
                    </p>
                  </Badge>
                </div>
                <div className="pr-3 pl-3 md:mt-8 md:w-[800px] lg:pr-0 lg:pl-0">
                  <h2 className="mt-4 mb-2 text-lg font-semibold text-gray-200 sm:text-xl md:mb-4 md:text-2xl lg:mt-0">
                    Description:
                  </h2>
                  <p>{allDatas?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="h-screen w-full bg-slate-950"></div>*/}
    </div>
  );
}
