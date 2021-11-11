import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/skills.module.css';

const skills = [
   {
      categorie: "RESEAU",
   },
   {
      categorie : "DEVELOPPEMENT",
  
   },
   {
      categorie : "Système",
     
   },
   {
      categorie : "Supervision",
   }
]

function SkillSet({categorie}) {
   return(
      <div className={styles.boxCompetence}>
      <div className={styles.bandeau}>
         <div className={styles.skillName}>{categorie}</div>
      </div> 
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