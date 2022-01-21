import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/home.module.css';
import Particles from 'react-particles-js';

const caracts = [
   {
      logo: "eye",
      title: "Curieux",
      description: "Chaque jour je m'efforce d'etre à jour sur les dernieres actualités IT, rester en alerte sur les dernieres sorties me permet d'etre toujours à jour dans le domaine."
   },
   {
      logo: "puzzle",
      title: "Organisé",
      description: "L'organisation doit faire partie intégrante d'un SysAdmin, prioriser ses taches, planifier les prochaines évolution tout en permettant assurer le fonctionnement opérationnel d'une infrastructure."
   },
   {
      logo: "rocket",
      title: "Autodidacte",
      description: "J'aime entreprendre régulièrement de nouvelles choses et explorer de nouvelles technologies afin de parfaire mes connaissances dans le monde vaste de l'informatique !"
   }
]

function Caract({logo, title, description}) {
   return(
      <div className={styles.caract}>
          <div className={styles.circle}>
            <img className={styles.caractIconImage} src={useBaseUrl(`/img/${logo}.png`)}/>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
   )
}

function Main() {
   return(
      <section className={styles.home}>
         <Particles
            params={{
                     "particles": {
                     "number": {
                        "value": 40,
                        "density": {
                           "enable": true,
                           "value_area": 800
                        }
                     },
                     "color": {
                        "value": "#ffffff"
                     },
                     "shape": {
                        "type": "circle",
                        "stroke": {
                           "width": 0,
                           "color": "#000000"
                        },
                        "polygon": {
                           "nb_sides": 5
                        },
                     },
                     "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                           "enable": false,
                           "speed": 1,
                           "opacity_min": 0.1,
                           "sync": false
                        }
                     },
                     "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                           "enable": false,
                           "speed": 40,
                           "size_min": 0.1,
                           "sync": false
                        }
                     },
                     "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                     },
                     "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                           "enable": false,
                           "rotateX": 600,
                           "rotateY": 1200
                        }
                     }
                     },
                     "interactivity": {
                     "detect_on": "canvas",
                     "events": {
                        "onhover": {
                           "enable": false,
                           "mode": "repulse"
                        },
                        "onclick": {
                           "enable": false,
                           "mode": "push"
                        },
                        "resize": true
                     },
                     "modes": {
                        "grab": {
                           "distance": 462.88401101176675,
                           "line_linked": {
                           "opacity": 1
                           }
                        },
                        "bubble": {
                           "distance": 400,
                           "size": 40,
                           "duration": 2,
                           "opacity": 8,
                           "speed": 3
                        },
                        "repulse": {
                           "distance": 200,
                           "duration": 0.4
                        },
                        "push": {
                           "particles_nb": 4
                        },
                        "remove": {
                           "particles_nb": 2
                        }
                     }
                     },
                     "retina_detect": true
                  }}
         />
         <div className={styles.info}>
            <img src={useBaseUrl('/img/profil.png')} />
            <h1>Qui suis-je ?</h1>
            <span>Alexis 22 ans, étudiant passionné en 5ème année à l'EPSI Nantes en spécialité infrastructure système et réseaux</span>
         </div>
         <div className={styles.caracts}>
            {caracts.map((props, idx) => (
               <Caract key={idx} {...props} />
            ))}
         </div>

     

      </section>
      
    )
}
export default Main