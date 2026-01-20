interface MainContentProps {
  title: string;
  description: string;
}
export function MainContent({ title, description, children }: React.PropsWithChildren<MainContentProps>) {
  return (
    <div className="content mt-3">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
}