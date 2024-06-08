import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

export default function MathficGame() {
    return (
        <div>
            <h2>Play In Mathfic</h2>
            <Link href="mathficgame">
                <button
                    className={styles.button}
                >
                    Start Your Game-Adventure
                </button>
            </Link>





        </div>


    );
}