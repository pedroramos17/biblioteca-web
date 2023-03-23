import { stringify } from "querystring";
import CardBook from "./CardBook";

export default function BookList() {
  const title = {
    title: "",
  };
  return (
    <>
      <main className="mx-8 mt-12">
        <h1 className="mb-5 font-bold text-3xl">Títulos recentes</h1>
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
