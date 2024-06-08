import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function GamesForStudents() {
    return (
        <div>
            <h2>DuperStudents - Games For Students</h2>


            <Image
                className={styles.block}
                src="/mathfic_image.png"
                alt="mathfic"
                width={80}
                height={80}
                priority
            />

            <p>
                Mathfic - game for students
            </p>


            <Link href="mathficgame">
                <button
                    className={styles.button}
                >
                    Play Mathfic
                </button>
            </Link>


        </div>


    );
}