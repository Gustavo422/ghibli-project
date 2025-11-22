import BgImage from "@/components/film_page/_components/BgImage";
import Characters from "@/components/film_page/_components/Characters";
import DescriptionSession from "@/components/film_page/_components/Description";
import ExtraInfos from "@/components/film_page/_components/ExtraInfos";
import FilmsBadges from "@/components/film_page/_components/FilmsBadges";
import HighlitedElements from "@/components/film_page/_components/HighlitedElements";
import InfoSession from "@/components/film_page/_components/InfoSession";
import MainCard from "@/components/film_page/_components/MainCard";
import MainContent from "@/components/film_page/_components/MainContent";
import MainImage from "@/components/film_page/_components/MainImage";
import PageLayout from "@/components/film_page/_components/PageLayout";
import ProductionTeam from "@/components/film_page/_components/ProductionTeam";
import { Separator } from "@/components/ui/Separator";
import FreshTomatoIcon from "@/components/ui/svg/FreshTomatoIcon.svg";
import RottenTomatoIcon from "@/components/ui/svg/RottenTomatoIcon.svg";
import { compareIdAndSlug, getFilmForId } from "@/lib/api";

export default async function FilmPage({ params }) {
  const { slug } = await params;
  const id = compareIdAndSlug(slug);

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
    "director",
    "producer",
    "people",
  );

  let iconValue = FreshTomatoIcon;
  const score = parseInt(datas?.rt_score);
  if (!isNaN(score)) {
    iconValue = score < 60 ? RottenTomatoIcon : FreshTomatoIcon;
  }
  return (
    <div className="relative h-full w-full">
      <PageLayout>
        <BgImage movie_banner={datas?.movie_banner} id={id} />
        <MainContent>
          <MainCard>
            <MainImage image={datas?.image} />
            <InfoSession>
              <HighlitedElements
                title={datas?.title}
                original_title={datas?.original_title}
                original_title_romanised={datas?.original_title_romanised}
              >
                <FilmsBadges
                  iconValue={iconValue}
                  rt_score={datas?.rt_score}
                  release_date={datas?.release_date}
                  running_time={datas?.running_time}
                />
              </HighlitedElements>
              <Separator className="mt-4 mb-2 w-full bg-slate-600 sm:w-[95%] md:w-[90%]" />
              <DescriptionSession description={datas?.description} />
            </InfoSession>
          </MainCard>
          <ExtraInfos>
            <Characters people={datas?.people} />
            <ProductionTeam
              director={datas?.director}
              producer={datas?.producer}
            />
          </ExtraInfos>
        </MainContent>
      </PageLayout>
    </div>
  );
}
