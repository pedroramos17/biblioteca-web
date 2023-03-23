import CardBook from "./CardBook";

interface BookListProps {
  title: string;
}
export default function BookList(props: BookListProps) {
  const title = props.title;
  return (
    <>
      <main className="mx-8 mt-12">
        <h1 className="mb-5 font-bold text-3xl">{title}</h1>
        <div className="grid grid-flow-col auto-cols-[23%] gap-5 overflow-x-scroll overscroll-inline-contain snap-x snap-mandatory scroll-pr-4">
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
        </div>
      </main>
    </>
  );
}
