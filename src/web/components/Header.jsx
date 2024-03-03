import Image from "next/image"
import Link from "@/web/components/ui/Link"
import { useSession } from "@/web/components/SessionContext"

const Header = () => {
  const { session, signOut } = useSession()
  return (
    <header className="flex flex-row items-center justify-around p-5 text-lg bg-white w-full">
      <Link href="/">
        <Image
          src="/LOGO.png"
          alt="Logo of the web site"
          title="Logo of the web site"
          width={90}
          height={90}
        />
      </Link>
      <ul className="flex gap-20 ">
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
      <ul className="flex gap-10">
        {session ? (
          <>
            <li>
              <Link href="/inscription">Inscription</Link>
            </li>
            <li>
              <Link href="/connexion">Connexion</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/inscription">Inscription</Link>
            </li>
            <li>
              <Link href="/connexion">Connexion</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
