import React, { useState } from 'react';
import styles from './Question.module.scss'

const Question = () => {
    const [state, setState] = useState({
        question: '',
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (event) => {
        setState((state) => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + state.value);
        event.preventDefault();
    }

    return (
        <div className={styles.Question} id="question">
            <h2 className={styles.Title}>задать вопрос</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.Form}>
                    <div className={styles.FormQuestion}>
                        <textarea placeholder="вопрос" name="question" value={state.question}
                                  onChange={handleChange}/>
                    </div>
                    <div className={styles.FormContact}>
                        <input placeholder="ФИО" type="text" name="name" value={state.name} onChange={handleChange}/>
                        <input placeholder="телефон" type="text" name="phone" value={state.phone}
                               onChange={handleChange}/>
                        <input placeholder="e-mail" type="text" name="email" value={state.email}
                               onChange={handleChange}/>

                    </div>
                </div>

                <div className={styles.FormSubmit}>
                    <input type="submit" value="отправить"/>
                    <div className={styles.CheckBox}>
                        <input type="checkbox" defaultChecked={true}/>
                        <p>я согласен с условиями и способами обработки и хранения персональных данных</p>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Question;
