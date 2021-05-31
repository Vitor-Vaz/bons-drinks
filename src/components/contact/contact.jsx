import React, { useEffect, useState, useRef } from 'react';
import styles from './contact.module.css';
import ContactPic from '../../img/contact-pic.jpg'
import { Button } from '@material-ui/core';


export default function Contact() {


    const minhaRef = useRef(null);

    const passaPorCima = (event) => {
        
        return console.log("Passei!");
    };



    const [status, setStatus] = useState(true);

    const [relogio, setRelogio] = useState( new Date());


    function tick(){
        setRelogio(new Date() );
    }

 
    useEffect( () => {
        const timer = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timer)
        }
    }, [relogio])


    function mudaStatus() {
        setStatus(!status);
    }

    useEffect(() => {

        console.log("montei");

    }, [])

    useEffect(() => {

        console.log("atualizei");

    }, [status])


    return (


        <div className={styles.main} >
            <h3 className={styles.title} > Entre em contato </h3>
            <div className={styles.body}>
                <img src={ContactPic} alt="Foto de contato" className={styles.picture} onMouseEnter={passaPorCima}/>
                <div className={styles.contact}>

                    <div>
                        <label htmlFor="">Nome:{relogio.toLocaleTimeString()}</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label> Email:</label>
                        
                        <input type="email" placeholder={relogio}/>
                    </div>

                    <div>
                        <label htmlFor="">Mensagem</label>
                        <input className={styles.textarea} type="textarea" />
                    </div>

                    <Button status={mudaStatus} />


                    <button disabled={status} >Enviar</button>

                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            mudaStatus();
                        }
                        }
                    >Enviar</button>
                </div>
            </div>



        </div>

    )
}