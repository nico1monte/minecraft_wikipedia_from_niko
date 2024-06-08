import Image from "next/image";
import styles from "./index.module.css";

export default function Blocks() {
    return (
        <div>
            <h2>Blocks</h2>

            <div className={styles.blockCard}>
                <Image
                    className={styles.block}
                    src="/block_tnt.png"
                    alt="tnt"
                    width={80}
                    height={80}
                    priority
                />

                <p >
                TNT is a block of which, if you set it on fire with a lighter, it will explode. just like a creeper. crafting recipe [gunpowder][sand][gunpowder][sand][gunpowder][sand][gunpowder][sand][gunpowder]. if the lighter craft looks like this [cooked iron][flint] successful crafting. if you craft a workbench like this [board][board][board[board]
                </p>
            </div>

            <div className={styles.blockCard}>
                <Image
                    className={styles.block}
                    src="/block_crafting_table.jpg"
                    alt="crafting table"
                    width={80}
                    height={80}
                    priority
                />

                <p >
                crafting table is a block that allows you to craft any items that can be crafted. the workbench is crafted from [board][board][board][board]
                </p>
            </div>

            <div className={styles.blockCard}>
                <Image
                    className={styles.block}
                    src="/block_enchant_table.jpg"
                    alt="enchant table"
                    width={80}
                    height={80}
                    priority
                />

                <p >
                An enchantment table is a block on which you can enchant objects. crafting this block looks like this [ ][book][ ][diamond][obsidian][diamond][obsidian][obsidian][obsidian]
                </p>
            </div>


        </div>

        
    );
}