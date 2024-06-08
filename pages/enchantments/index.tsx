import Image from "next/image";
import styles from "./index.module.css";

export default function Enchantments() {
    return (
        <div>
            <h2>Enchantments</h2>

            <div className={styles.enchantmentCard}>
                <Image
                    className={styles.enchantment}
                    src="/enchantment_book.jpg"
                    alt="enchantment book"
                    width={80}
                    height={80}
                    priority
                />

                <p >
                repulsion is an enchantment that does, the higher the level of enchantment, the further it repels. You can enchant using an anvil or an enchanting table. + to enchant on the enchantment table you need lapis lazuli and experience. experience is on the anvil
                </p>
            </div>
        </div>
    );
}