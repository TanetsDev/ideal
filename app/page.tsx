import MainContainer from "@/components/Containers/MainContainer";
import { heroBg } from "@/public/images";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className=" h-[960px]">
        <Image src={heroBg} alt="Баннер" className=" size-full"></Image>
        <MainContainer>Hero</MainContainer>
      </section>
    </main>
  );
}
