export default function DescriptionSession({ description }) {
  return (
    <>
      <h3 className="text-accent text-xl font-medium md:text-2xl">
        Description:
      </h3>
      <p className="text-ring max-w-4xl lg:pr-24">{description}</p>
    </>
  );
}
