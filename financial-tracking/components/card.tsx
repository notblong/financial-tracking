type Props = {
  title?: string;
  width?: CardWidth;
  children: JSX.Element;
};

export enum CardWidth {
  Full = "w-full",
  Half = "w-1/2",
  Three = "w-1/3",
}

export default function Card({ title, width, children }: Props) {
  let cardWidth = width ?? CardWidth.Full;
  return (
    <>
      <div className={cardWidth + " border rounded-md m-2"}>
        <div className="p-2">
          {title ?? "Untitled"}
          <div className="h-80">{children}</div>
        </div>
      </div>
    </>
  );
}
