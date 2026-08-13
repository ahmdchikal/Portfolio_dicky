export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <h2 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-foreground sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}
