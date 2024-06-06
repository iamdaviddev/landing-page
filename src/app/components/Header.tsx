import Image from "next/image";
import Link from "next/link";
import logoImg from "/public/logo.svg"

export function Header () {
  return (
    <div className="container">
      <div>
        <Image src={logoImg} alt="logotipo"/>
      </div>
      <nav>
        <Link href="#"></Link>
      </nav>
    </div>
  )
}
