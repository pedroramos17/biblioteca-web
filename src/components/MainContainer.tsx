import Image from "next/image";

export default function MainContainer({ children }: any) {
  return (
    <>
      <header className="p-4 pb-5 pl-12 flex justify-between border-b border-gray-300">
        <Image
          src="/logo.svg"
          alt="Logo da biblioteca ETECIA"
          width={211}
          height={45}
        />
        <div className="flex justify-between gap-20">
          <Image
            src="/search.svg"
            alt="Ícone de pesquisa"
            width={30}
            height={30}
          />
          <Image src="/menu.svg" alt="Ícone de menu" width={40} height={25.5} />
        </div>
      </header>
      <div>{children}</div>
    </>
  );
}
