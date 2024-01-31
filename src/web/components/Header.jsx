import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between m-5 p-5 text-xl border-b-2 border-b-[#F2E963] border-[#F2E963]">
      <Link href="/" styless>
        <Image
          src="/LOGO_J.png"
          alt="Logo of the web site"
          title="Logo of the web site"
          width={200}
          height={200}
        />
      </Link>
      <ul className="flex gap-20">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/planning">Planning</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="flex gap-10">
        <li>
          <Link href="/inscription">Inscription</Link>
        </li>
        <li>
          <Link href="/connexion">Connexion</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
