import Link from "next/link";
import Logo from "./components/logo";
import IllustrationSVG from '@/app/assets/Illustration.svg'
import Image from "next/image";
import { Github, HandHeart } from "lucide-react";

export default function Home() {
  return (
    <main className="grid min-h-screen justify-center bg-zinc-50">
      <div className="flex w-screen h-16 items-center justify-between px-18 border-b border-zinc-200">
        <Logo />
        <nav>
          <ul className="flex w-[425px] h-9 justify-between justify-items-center items-center">
            <li className="text-sm text-zinc-600"><Link href={'/'}>Vagas</Link></li>
            <li className="text-sm text-zinc-600"><Link href={'/'}>Desenvolvedores</Link></li>
            <li className="text-sm text-zinc-600"><Link href={'/'}>Empresas</Link></li>
            <li className="flex w-[120px] h-9 bg-emerald-600 text-zinc-50 justify-center items-center rounded-md"><Link href={'/'}>Entrar</Link></li>
          </ul>
        </nav>
      </div>
      <div className="w-full flex flex-col justify-center items-center my-64">
        <p className="w-[598px] text-4xl text-zinc-900 font-medium mb-4">A forma mais fácil de conectar recrutadores e desenvolvedores</p>
        <p className="w-[598px] text-zinc-600 mb-6">Facilitamos conexões diretas entre recrutadores e desenvolvedores, oferecendo uma experiência simples, ágil e totalmente gratuita.</p>
        <div className="flex w-[598px] space-x-[24px] mb-16">
          <Link href={'/'} className="flex h-10 w-full bg-emerald-600 text-zinc-50 justify-center items-center rounded-md">Quero Trabalhar</Link>
          <Link href={'/'} className="flex h-10 w-full bg-zinc-800 text-zinc-50 justify-center items-center rounded-md">Quero Contratar</Link>
        </div>
        <Image src={IllustrationSVG} alt="ilustração" />
      </div>
      <footer className="flex flex-col justify-center items-center my-10 space-y-[18px]">
        <Logo />
        <p className="text-zinc-400">Quer ajudar a manter o projeto de pé?</p>
        <div className="flex space-x-6">
          <Link href={'/'} className="flex text-sm text-zinc-400 justify-items-center items-center space-x-2">
            <Github />
            <span>Faça uma contribuição</span>
          </Link>
          <Link href={'/'} className="flex text-sm text-zinc-400 justify-items-center items-center space-x-2">
            <HandHeart />
            <span>Faça uma doação</span>
          </Link>
        </div>
      </footer>
    </main>
  )
}
