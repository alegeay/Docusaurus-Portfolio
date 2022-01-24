import React, { useState } from 'react';
import Modal from 'react-modal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/skills.module.css';

const customStyles = {
   content: {
     top: '50%',
     left: '50%',
     right: 'auto',
     bottom: 'auto',
     marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
   },
 };


const skills = [
   {
      categorie: "RESEAU",
      competence: [
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         }
      ]
   },
   {
      categorie : "DEVELOPPEMENT",
      competence: [
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         }
      ]
   },
   {
      categorie : "Système",
      competence: [
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         }
      ]
     
   },
   {
      categorie : "Supervision",
      competence: [
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         },
         {
            img: "cisco",
            name: "cisco",
            description: "blabla"
         }
      ]
   }
]

const Skill = (comp) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    const afterModalOpen = () => null
    return(
        <span>
            <img onClick={openModal} src={useBaseUrl(`/img/images/${comp.img}.png`)}/>
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>close</button>

                <div>
                    {comp.description}
                </div>
            </Modal>
        </span>
    )
}

const SkillSet = (prop) => {
    return(
        <div className={styles.boxCompetence}>
            <div className={styles.bandeau}>
                <div className={styles.skillName}>
                    {prop.categorie}
                </div>
                
            </div>
            {prop.competence.map((comp, idx) => (
                <Skill key={idx} {...comp}/>
            ))}
        </div>
    )
}


const Skills = () => {

    let subtitle;

    return(
        <section className={styles.skills}>
            <h1>Compétences</h1>
         
            {/* <button onClick={openModal}>Open Modal</button> */}

            <div className={styles.skillzone}>
                {skills.map((props, idx) => (
                    <SkillSet key={idx} {...props} />
                ))}
            </div>
        </section>
    )
}
export default Skills