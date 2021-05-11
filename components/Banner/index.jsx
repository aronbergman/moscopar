import React from 'react';
import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <div className={styles.Banner}>
            <h3 className={styles.Title}>присоединяйся <br/>
                к более чем 500 <br/>
                участникам
                <span>регистрация

                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
<path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9L26 9V7L0 7L0 9Z" fill="white"/>
</svg>
                </span></h3>
        </div>
    );
};

export default Banner;
