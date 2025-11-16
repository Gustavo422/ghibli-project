export default function DescriptionSession({ description }) {
  return (
    <>
      <h3 className="text-xl font-medium text-slate-200 md:text-2xl">
        Description:
      </h3>
      <p className="text-ring max-w-4xl lg:pr-24">{description}</p>
    </>
  );
}
