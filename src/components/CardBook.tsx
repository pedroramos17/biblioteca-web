import Image from "next/image";

export default function CardBook({ photo }: any) {
  return (
    <>
      <div className="grid grid-rows-[min-content] gap-2 snap-start">
        <Image
          className="object-cover rounded-sm shadow"
          src="/atomic-habits.jpg"
          alt="Imagem do livro"
          width={500}
          height={500}
        />
        <p className="text-lg">nome do livro</p>
      </div>
    </>
  );
}
