import ImageSkeleton from "@/components/ImageSkeleton";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function FilmCard({ id, image, title, description }) {
  return (
    <Card className="group border-accent-foreground hover:border-ring-accent w-[190px] rounded-md border transition-all duration-200 hover:scale-[1.01] md:w-[280px] lg:w-[300px]">
      <Link href={`/films/${id}`}>
        <CardContent className="flex w-full flex-col p-0">
          <Suspense fallback={<ImageSkeleton />}>
            <Image
              src={image}
              alt={`Image ${id}`}
              width={510}
              height={770}
              style={{ width: "100%", height: "auto" }}
              className="w-full rounded-t-md object-cover brightness-75 group-hover:brightness-50"
            />
          </Suspense>

          <CardHeader className="px-3">
            <CardTitle>
              <h4 className="text-accent line-clamp-1 text-center text-xl font-medium md:text-2xl">
                {title}
              </h4>
            </CardTitle>
            <CardDescription>
              <p className="text-ring line-clamp-4 text-center text-base md:text-[17px]">
                {description}
              </p>
            </CardDescription>
          </CardHeader>
          <CardFooter className="m-0 flex w-full justify-center px-5">
            <Button
              variant="default"
              type="button"
              className="border-accent-foreground h-fit w-[95%] cursor-pointer rounded-md border bg-blend-color"
            >
              <p className="text-ring text-base md:text-lg">Learn More</p>
            </Button>
          </CardFooter>
        </CardContent>
      </Link>
    </Card>
  );
}
