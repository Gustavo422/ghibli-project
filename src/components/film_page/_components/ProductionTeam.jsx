import {
  CollaboratorsCard,
  ProducersCards,
} from "@/components/film_page/_components/ProductionCards";

export default function ProductionTeam({ director, producer }) {
  return (
    <div className="order-1 w-[90%] md:order-2">
      <h3 className="py-3 text-xl font-medium text-slate-200 md:my-0 md:text-2xl">
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
  );
}
