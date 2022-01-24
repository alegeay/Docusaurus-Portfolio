import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './css/timeline.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool,FaUniversity,FaQuestion } from 'react-icons/fa';
import { MdSchool } from "react-icons/md";
import { FcOk,FcSynchronize,FcOrganization } from "react-icons/fc";

function Timeline() {
    return(
      <section className={styles.timeline}>
        <h1>Expériences & Formations</h1>
        <VerticalTimeline lineColor={ "gray" }>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#009BE2', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #009BE2' }}
          date="2015 - 2017"
          iconStyle={{ background: '#009BE2', color: '#fff' }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Bac STI2D</h3>
          <h4 className="vertical-timeline-element-subtitle">Lycée Le Mans Sud</h4>
          <p>
            <ul className={styles.timelist}>
              <li><FcOk /> Obtention mention très bien</li>
            </ul>
           
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#12415C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #12415C' }}
          date="2017 - 2019"
          iconStyle={{ background: '#12415C', color: '#fff' }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">EPSI 1-2ème année</h3>
          <h4 className="vertical-timeline-element-subtitle">Nantes</h4>
          <p>
          <ul className={styles.timelist}>
                <li><FcOrganization/> Stage Lengow (1ère année)</li>
                <li><FcOrganization/> Stage WoodBrass (2ème année)</li>
                
           </ul>
           Diplome :
           <ul className={styles.timelist}>
           <li><FcOk /> Obtention BTS SIO (Option systèmes et réseaux )</li>
           </ul>
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#009BE2', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #009BE2' }}
          date="2019-2020"
          iconStyle={{ background: '#009BE2', color: '#fff' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">EPSI 3ème année</h3>
          <h4 className="vertical-timeline-element-subtitle">Nantes</h4>
          <p>
            <ul className={styles.timelist}>
                <li><FcOrganization/> Alternance chez DynaMIPS</li>  
           </ul>
           Diplome : 
           <ul className={styles.timelist}>
             <li><FcOk /> Obtention du titre RNCP Niveau 6 : ASRBD (Félicitations)</li>
            
           </ul>
           
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#12415C', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #12415C' }}
          date="2020-Aujourd'hui"
          iconStyle={{ background: '#12415C', color: '#fff' }}
          icon={<MdSchool />}
          
        >
          <h3 className="vertical-timeline-element-title">EPSI 4-5ème année</h3>
          <h4 className="vertical-timeline-element-subtitle">Nantes</h4>
          <p>
            <ul className={styles.timelist}>
                <li><FcOrganization/> Alternance chez DynaMIPS</li>
                
           </ul>
           Diplome : 
           <ul className={styles.timelist}>
             <li><FcSynchronize /> Préparation du titre RNCP Niveau 7 : EISI</li>
           </ul>
           
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#546A7B', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #546A7B' }}
         
          iconStyle={{ background: '#546A7B', color: '#fff' }}
          icon={<FaQuestion />}
        >
          <h3 className="vertical-timeline-element-title">Et après ?</h3>
          
         
        </VerticalTimelineElement>
        
      </VerticalTimeline>
      </section>
     )
 }

export default Timeline