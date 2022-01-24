import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/contact.module.css';
import { FaDiscord,FaGithub,FaTelegram,FaLinkedin } from 'react-icons/fa';
const contacts = [
    {
       logo: <FaDiscord size={96} color='#7289da'/>,
       title: "Discord ",
       link: "https://discord.gg/BzbQpCMu"
    },
    {
       logo: <FaGithub size={96} color="#000000"/>,
       title: "Github",
       link: "https://github.com/witrem"
    },
    {
       logo: <FaTelegram size={96} color="#229ED9"/>,
       title: "Telegram",
       link: ""
    },
    {
        logo: <FaLinkedin size={96} color='#0077b5'/>,
        title: "Linkedin",
        link: "https://www.linkedin.com/in/alexis-legeay-6773aa140/"
     }
 ]

function ContactListing({logo, title,link}) {
    return(
       <a href={link} target="_blank" rel="noopener noreferrer" className={styles.contactbox}> 
           {logo}             
           <h3>{title}</h3>       
       </a>
    )
 }


function Contact() {
    return(
        <section className={styles.contact}>
        <h1>Vous voulez me suivre ? C'est juste ici !</h1>
        <div className={styles.contacts}>
            {contacts.map((props, idx) => (
               <ContactListing key={idx} {...props} />
            ))}
         </div>
        </section>


    )
}


export default Contact