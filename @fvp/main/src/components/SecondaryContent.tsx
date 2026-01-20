interface SecondaryContentProps {
  title: string;
  description: string;
}
export function SecondaryContent({ title, description }: SecondaryContentProps) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}