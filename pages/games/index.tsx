import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";
import { useGoAgent } from "./useGoAgent";

export default function Games() {
    const [isStarted, setIsStarted] = useState(false);
    const [userInput, setUserInput] = useState('');

    const { runUserInput } = useGoAgent();

    const startGame = () => {
        runUserInput(userInput);
    }

    return (
        <div>
            <h2>Games</h2>

            <div className={styles.gameCard}>
                <Image
                    className={styles.game}
                    src="/agent_go_game.jpg"
                    alt="game"
                    width={80}
                    height={80}
                    priority
                    title="picture of the game Agent Is Coming - click to find out more"
                />

                <p >
                    Agent Goes is a game where you need to create instructions for the Agent and check how your instructions for the Agent work
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.field}>
                    <div>
                        <Image
                            className={styles.startPoint}
                            src="/start_of_agent.png"
                            alt="start of agent"
                            width={60}
                            height={30}
                            priority
                            title="Start"
                        />
                        start for the Agent
                    </div>
                    <div className={styles.row}>

                        <div className={styles.col}>
                            <Image
                                className={styles.agent}
                                src="/agent.png"
                                alt="agent"
                                width={30}
                                height={30}
                                priority
                                title="Agent - the main mob of the game"
                            />
                        </div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                    <div className={styles.turnFinishPoint}>
                        finish for the Agent
                        <Image
                            className={styles.startPoint}
                            src="/finish_of_agent.png"
                            alt="finish of agent"
                            width={60}
                            height={30}
                            priority
                            title="Finish"
                        />

                    </div>
                </div>

                <div>
                    <Image
                        className={styles.game}
                        src="/nico.png"
                        alt="nico"
                        width={300}
                        height={210}
                        priority
                        title="Nico - is developer of this site"
                    />


                    <Image
                        className={styles.game}
                        src="/vladimir.png"
                        alt="vladimir"
                        width={300}
                        height={210}
                        priority
                        title="Vladimir - my teacher about math and sport"
                    />

                    {isStarted === true && (<div className={styles.controls}>
                        <textarea onChange={(event) => { setUserInput(event.target.value) }} className={styles.instructionsForAgent}></textarea>
                        <button onClick={startGame} title="do you want to run your program into the Agent's brain?" type='button' className={styles.start}>Start game with your instruction</button>
                    </div>)}

                    {isStarted === false && (
                        <div className={styles.controls}>
                            <button title="do you want to write a command for the Agent?" type='button' className={styles.start} onClick={() => setIsStarted(true)}>
                                Open window for Agent instructions
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>


    );
}