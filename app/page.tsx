import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image
          className={styles.mob}
          src="/logo_of_the_site.jpg"
          alt="logo"
          width={80}
          height={80}
          priority
          title="This is logo for this site"
        />
        <div>
          <h1 className={styles.title}>MINECRAFT WIKI FOR ALL</h1>
          <p>
            On this site you will find a huge adventure about the game MINECRAFT
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <Image
          className={styles.banner}
          src="/minecraft_wiki_from_niko_banner.jpg"
          alt="banner"
          width={1000}
          height={300}
          priority
        />

        <nav className={styles.nav}>
          <Link className={styles.link} href='/mobs'>
            Story about Mobs
          </Link>

          <Link className={styles.link} href='/blocks'>
            Story about Blocks
          </Link>

          <Link className={styles.link} href='/enchantments'>
            Story about Enchantments
          </Link>

          <a className={styles.link}>
            Story about Items
          </a>

          <Link className={styles.link} href='/games'>
            My Games For All
          </Link>

          <Link className={styles.link} href='/youtubee'>
            Youtubee for alls
          </Link>

          <Link className={styles.link} href='/duperstudentsgamesforstudents'>
          DuperStudents - Games for Students
          </Link>
        </nav>

      </main>
    </>
  );
}
