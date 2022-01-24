import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/skills.module.css';
import Modal from 'react-modal';

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

 Modal.setAppElement('Skills');
 const [modalIsOpen, setIsOpen] = React.useState(false);

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

function SkillSet(prop) {
   return(
      <div className={styles.boxCompetence}>
      <div className={styles.bandeau}>
         <div className={styles.skillName}>{prop.categorie}</div>
         
      </div> 
      {prop.competence.map((comp, idx) => (
            <img src={useBaseUrl(`/img/images/${comp.img}.png`)}/> 
         ))}
 </div>
   )
}

function openModal() {
   setIsOpen(true);
 }

 function afterOpenModal() {
   // references are now sync'd and can be accessed.
   subtitle.style.color = '#f00';
 }

 function closeModal() {
   setIsOpen(false);
 }

function Skills() {

   let subtitle;


    return(
       <section className={styles.skills}>
          <h1>Compétences</h1>
         
          <button onClick={openModal}>Open Modal</button>
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>


          <div className={styles.skillzone}>
            {skills.map((props, idx) => (
               <SkillSet key={idx} {...props} />
            ))}
         </div>



       </section>
     )
 }
 export default Skills