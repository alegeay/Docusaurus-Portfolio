import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/skills.module.css';

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


function Skills() {
    return(
       <section className={styles.skills}>
          <h1>Compétences</h1>


          <div className={styles.skillzone}>
            {skills.map((props, idx) => (
               <SkillSet key={idx} {...props} />
            ))}
         </div>



       </section>
     )
 }
 export default Skills