import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Youtubee() {
    return (<div>
        <Image
            className={styles.youtubeCard}
            src="/what_youtubee_you_want_choice.png"
            alt="what youtubee you want choice"
            width={80}
            height={80}
            priority
            title="What youtubee you want choice?"
        />

        <Image
            className={styles.youtubeCard}
            src="/youtubee_gaming.png"
            alt="youtubee gaming"
            width={80}
            height={80}
            priority
            title="You want choice Youtube Gaming?"
        />

        <Link className={styles.link} href='/youtubee/youtubegaming' title="You want play in this youtubee?">
            Play
        </Link>

    </div>);


};


