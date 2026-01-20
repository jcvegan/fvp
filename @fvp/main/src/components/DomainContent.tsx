interface DomainContentProps {
  title: string;
}
export function DomainContent({ title, children }: React.PropsWithChildren<DomainContentProps>) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}