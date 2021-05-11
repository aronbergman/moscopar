import React, { useState } from 'react';
import styles from './About.module.scss'
import { useSpring, animated, config } from 'react-spring'

const About = () => {

    function Number(num) {
        const [flip, set] = useState(false)
        const { number } = useSpring({
            reset: true,
            reverse: flip,
            from: { number: num },
            number: 0,
            delay: 200,
            config: config.molasses,
        })

        return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
    }
    return (
        <div className={styles.About} id="about">
            <div className={styles.Rows}>
                <div className={styles.Container}>
                    <h1 className={styles.Title}>о конференции</h1>
                    <div className={styles.Description}>
                        Конференция пройдет 21-22 сентября 2020
                        года в Московской школе управления
                        «Сколково». Эксперты по борьбе с ВИЧ
                        соберутся, чтобы обсудить инновационные
                        решения по проведению профилактики,
                        диагностики и лечения ВИЧ-инфекции,
                        взаимодействие и роль некоммерческих
                        организаций в этой проблеме
                        и консолидацию усилий гражданского.
                    </div>

                    <div className={styles.DescriptionMobile}>
                        Конференция пройдет 21-22 <br/>сентября 2020
                        года в Московской школе управления
                        «Сколково». Эксперты по борьбе с ВИЧ<br/>
                        соберутся, чтобы обсудить <br/>инновационные
                        решения по <br/>проведению профилактики,<br/>
                        диагностики и лечения <br/>ВИЧ-инфекции.
                    </div>

                </div>
                <div className={styles.Image}/>
            </div>

            <div className={styles.Counts}>
                <div className={styles.CountItem}><span>{Number(2)}</span> <p>дня</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(750)}</span> <p>участников</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(17)}</span> <p>панелей с&nbsp;участниками</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(15)}</span> <p>часов</p></div>
                <div className={styles.CountLine}/>
                <div className={styles.CountItem}><span>{Number(10)}</span> <p>спикеров</p></div>
            </div>
        </div>
    );
};

export default About;
