import React from 'react';
import styles from './Speakers.module.scss'
import Square from "./Square";
import anton from '../../public/anton.jpeg'

const Speakers = () => {
    return (
        <div className={styles.Speakers} id="speakers">
            <h2 className={styles.Title}>спикеры</h2>

            <div className={styles.Squires}>
                <Square photo={anton} color={'#FF005C'}/>
                <Square
                    nameFirst={'Антон'}
                    nameSecond={'Красовский'}
                    description={'российский общественный деятель, журналист, публицист, телеведущий'}
                    arrow={'right'}
                    color={'#FF005C'}
                />
                <Square photo={anton} color={'#002381'}/>
                <Square
                    nameFirst={'Антон'}
                    nameSecond={'Красовский'}
                    description={'российский общественный деятель, журналист, публицист, телеведущий'}
                    arrow={'right'}
                    color={'#002381'}
                    textColor={'white'}
                />
                <Square
                    nameFirst={'Антон'}
                    nameSecond={'Красовский'}
                    description={'российский общественный деятель, журналист, публицист, телеведущий'}
                    arrow={'left'}
                    color={'#265CDD'}
                    textColor={'white'}
                    />
                <Square photo={anton} color={'#00CFFF'}/>
                <Square
                    nameFirst={'Антон'}
                    nameSecond={'Красовский'}
                    description={'российский общественный деятель, журналист, публицист, телеведущий'}
                    arrow={'left'}
                    color={'#00CFFF'}/>
                <Square photo={anton} color={'#fff'}/>
            </div>


        </div>
    );
};

export default Speakers;
