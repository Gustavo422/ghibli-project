import { Badge } from "@/components/ui/Badge";
import characterFetch from "@/lib/characterFetch";
import {
  CircleQuestionMarkIcon,
  EyeIcon,
  HourglassIcon,
  MarsIcon,
  VenusIcon,
  WavesIcon,
} from "lucide-react";
import Image from "next/image";
export default async function CharacterPage() {
  const datas = await characterFetch();
  return (
    <div className="flex min-h-full min-w-full flex-col items-center justify-center">
      {Object.entries(datas).map(([filmName, people]) => {
        return (
          <div
            key={filmName}
            className="my-5 flex h-full w-full flex-col flex-wrap items-center justify-center gap-4 md:my-8"
          >
            <h4 className="text-2xl font-medium md:text-3xl">{filmName}</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {people.map((character, i) => (
                <div
                  key={i}
                  className="border-accent-foreground flex h-fit w-fit flex-col items-center justify-center gap-y-3 rounded-md border brightness-75 transition-all hover:scale-[1.01] hover:brightness-50"
                >
                  <div className="relative aspect-square h-[300px] w-full md:h-[360px]">
                    <Image
                      src={`/characters/${character?.name}.png`}
                      width={360}
                      height={360}
                      quality={100}
                      alt={`${character?.name} Picture`}
                      className="absolute h-full w-full rounded-t-md object-contain"
                    />
                  </div>

                  <h3 className="text-lg font-medium md:text-xl">
                    {character?.name}
                  </h3>

                  <div className="text-accent mb-3 flex flex-col items-center justify-center gap-y-3">
                    <h4 className="text-ring text-base md:text-lg">
                      Physical Characteristics:
                    </h4>

                    <div className="flex h-fit max-w-[360px] flex-wrap items-center justify-center gap-3 px-2">
                      <Badge className="h-6 w-fit gap-x-1.5 rounded-md py-4">
                        {character?.gender === "Male" ? (
                          <MarsIcon />
                        ) : character?.gender === "Female" ? (
                          <VenusIcon />
                        ) : (
                          <CircleQuestionMarkIcon />
                        )}
                        <p>{character?.gender}</p>
                      </Badge>

                      <Badge className="h-6 w-fit gap-x-1.5 rounded-md py-4">
                        <EyeIcon /> <p>{character?.eye_color}</p>
                      </Badge>
                      <Badge className="h-6 w-fit gap-x-1.5 rounded-md py-4">
                        <WavesIcon /> <p>{character?.hair_color}</p>
                      </Badge>
                      <Badge className="h-6 w-fit gap-x-1.5 rounded-md py-4">
                        <HourglassIcon className="h-5" />{" "}
                        <p>{character?.age} year(s)</p>
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
