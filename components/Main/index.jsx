import React from 'react';
import styles from './Main.module.scss'

const Main = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.Titles}>
                <h2 className={styles.Description}>21–22 сентября <span>онлайн</span></h2>
                <h1 className={styles.Title}>российско-французская <br/>
                    научно-практическая <br/>
                    конференция</h1>
                <button className={styles.Button}>регистрация</button>
            </div>

            <div className={styles.Image}/>
        </div>
    );
};

export default Main;
