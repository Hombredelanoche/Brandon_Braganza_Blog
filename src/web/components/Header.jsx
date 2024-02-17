import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-around p-5 text-lg ">
      <Link href="/">
        <Image
          src="/LOGO_J.png"
          alt="Logo of the web site"
          title="Logo of the web site"
          width={100}
          height={100}
        />
      </Link>

      <ul className="flex gap-20">
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="flex gap-5">
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
