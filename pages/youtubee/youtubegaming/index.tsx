import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function Youtubee() {
    return (<div>
        <Link href="https://www.youtube.com/watch?v=VO_MpPsLSGg">
            <Image
                className={styles.youtubeCard}
                src="/youtubee.jpg"
                alt="nico youtubee"
                width={80}
                height={80}
                priority

            />
        </Link>

        <Link href="https://www.youtube.com/watch?v=czpbgrYVdI0">
            <Image
                className={styles.youtubeCard}
                src="/youtubee.png"
                alt="nico youtubee"
                width={80}
                height={80}
                priority

            />
        </Link>

        <Link href="https://www.youtube.com/watch?v=oFil1M89vgs">
            <Image
                className={styles.youtubeCard}
                src="/youtubee_nico.png"
                alt="nico youtubee"
                width={80}
                height={80}
                priority

            />
        </Link>


        <Link href="https://www.youtube.com/watch?v=kgnXuYC8gMk&t=990s">
            <Image
                className={styles.youtubeCard}
                src="/nico_youtubee.png"
                alt="nico youtubee"
                width={80}
                height={80}
                priority

            />
        </Link>

        <div>
            <Link href="https://www.youtube.com/@PriklucheniiKoli">
                <Image
                    className={styles.youtubeCard}
                    src="/creater_image.png"
                    alt="nico youtubee"
                    width={80}
                    height={80}
                    priority

                />
            </Link>
            <p>Cool Videos of the creator - warning Spaniards and English people will not understand</p>
        </div>
    </div>);
}