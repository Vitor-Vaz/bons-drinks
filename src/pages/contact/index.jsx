import React from 'react';
import styles from './styles.module.css';
import ContactPic from '../../img/contact-pic.jpg';


export default function Contact() {



    return (


        <div className={styles.main} >
            <h3 className={styles.title} > Entre em contato </h3>
            <div className={styles.body}>
                <img src={ContactPic} alt="Foto de contato" className={styles.picture}/>
                <div className={styles.contact}>

                    <div>
                        <label htmlFor="">Nome:</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label> Email:</label>
                        
                        <input type="email"/>
                    </div>

                    <div>
                        <label htmlFor="">Mensagem</label>
                        <input className={styles.textarea} type="textarea" />
                    </div>

                    <button >Enviar</button>
                </div>
            </div>



        </div>

    )
}