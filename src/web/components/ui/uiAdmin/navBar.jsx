import Link from "@/web/components/ui/Link"

/**
 *
 * @returns Une barre de navigation qui devrait s'afficher à la reconnaissance du rôle admin de l'utilisateur seulement
 */
const NavBar = () => {
  return (
    <>
      <nav className="flex mt-0 justify-center bg-yellow-100">
        <ul className="flex h-10">
          <li>
            <Link href="#">Element 1</Link>
          </li>
          <li>
            <Link href="#">Element 2</Link>
          </li>
          <li>
            <Link href="#">Elemnt 3</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
