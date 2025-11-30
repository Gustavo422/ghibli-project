import {
  CollaboratorsCard,
  ProducersCards,
} from "@/components/film_page/_components/ProductionCards";

export default function ProductionTeam({ director, producer }) {
  return (
    <div className="order-1 flex w-full md:order-2 lg:items-center lg:justify-center">
      <div className="lg:w-[90%]">
        <h3 className="text-accent py-3 text-xl font-medium md:my-0 md:text-2xl">
          Production team:
        </h3>
        <div className="flex w-fit flex-wrap gap-x-3 gap-y-3">
          <CollaboratorsCard
            assign={"Director"}
            name={director}
            key={"director"}
          />
          <ProducersCards producers={producer} />
        </div>
      </div>
    </div>
  );
}
