type Props = {
  title: string;
  children: JSX.Element;
};

export default function Card({ title, children }: Props) {
  return (
    <div className="w-1/2 border rounded-md">
      <div className="p-2">
        {title ?? "Untitled"}
        {children}
      </div>
    </div>
  );
}
