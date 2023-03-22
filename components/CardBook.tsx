import Image from "next/image";

export default function CardBook({ photo }: any) {
  return (
    <>
      <div className="grid grid-rows-[min-content] gap-2">
        <Image
          className="object-cover"
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
