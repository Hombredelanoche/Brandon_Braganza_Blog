import Image from "next/image"

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between m-5 p-5 text-xl border-b-2 border-b-[#F2E963] border-[#F2E963]">
      <Image
        src="/LOGO_J.png"
        alt="Logo of the web site"
        title="Logo of the web site"
        width={200}
        height={200}
        className=""
      />
      <ul className="flex gap-20">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Planning</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Qui sommes nous</a>
        </li>
        <li>
          <a href="#">Nous contacter</a>
        </li>
      </ul>
      <ul className="flex gap-10">
        <li>
          <a href="#">Sign in</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
