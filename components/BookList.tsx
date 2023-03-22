import CardBook from "./CardBook";

export default function BookList() {
  return (
    <>
      <main className="ml-10 mt-12">
        <h1 className="mb-5 font-bold text-3xl">Livros recentes</h1>
        <div className="grid grid-flow-col auto-cols-[23%] gap-5 overflow-x-auto overscroll-inline-contain rounded-lg">
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
