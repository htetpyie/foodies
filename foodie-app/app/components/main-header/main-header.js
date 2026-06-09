import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./navlink";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A Plate with food on it." priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals" children="Browse Meals"/>
            </li>
            <li>
              <NavLink href="/community" children="Foodies Community"/>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
