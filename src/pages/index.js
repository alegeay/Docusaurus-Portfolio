import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './portfolio.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
       
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
    
      <main>
      <div id="landing-page">
      <section class="hero-container has-overlay-image">
      <div class="hero is-medium back" id="particles-js">
         <div class="hero-body">
            <div class="container is-small has-text-centered">
               <div class="columns">
                  <div class="column is-half is-offset-one-quarter">
                        <h1 id="anim1" class="title is-2 is-spaced"></h1>
                

                     <div class="card-content is-flex is-horizontal-center">
                        <figure class="image"><img src="../../static/img/profil.png"/></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section  class="section has-background-white is-medium">
      <div class="container is-small has-text-centered">
         <div class="columns">
            <div class="column is-half is-offset-one-quarter">
               <h1 class="title is-spaced">Qui suis-je ?</h1>
               <h5 class="subtitle  is-spaced">Amet nonumy vero diam dolores accusam no elitr sed sadipscing sed. No
                  kasd ut sit et dolores labore lorem dolor dolor. Et est rebum dolore eirmod labore erat ipsum sanctus,
                  ipsum no eirmod ut sit ut diam justo sea ea..</h5>
            </div>
         </div>
         </div>
         <div class="columns">
            <div class="column">
               <div class="card-image has-text-centered">
                  <figure class="image is-128x128 is-inline-block"
                    ><img
                        src="../../static/img/eye.png"/></figure><br/><br/>
               </div>
       
              
               <h5 class="title is-5 is-spaced">Curieux</h5>
               <p class="subtitle is-6">Elitr sea sed no et sea amet invidunt aliquyam et. Dolores sea est sadipscing
                  ipsum diam stet vero justo, et erat takimata takimata ea, tempor no labore nonumy erat eirmod.</p>
            </div>
            <div class="column">
               <div class="card-image has-text-centered">
                  <figure class="image is-128x128 is-inline-block"><img src="../../static/img/puzzle.png"/></figure><br/><br/>
               </div>
               <h5 class="title is-5 is-spaced">Organisé</h5>
               <p class="subtitle is-6">Consetetur rebum kasd elitr tempor ea est amet. Eirmod et dolore nonumy lorem clita elitr consetetur. Erat diam sadipscing ut.</p>
            </div>
            
            <div class="column">

               <div class="card-image has-text-centered">
                  <figure class="image is-128x128 is-inline-block"><img src="../../static/img/rocket.png"/></figure><br/><br/>
               </div>

               <h5 class="title is-5 is-spaced">Ambitieux</h5>
               <p class="subtitle is-6">Eirmod et at et sadipscing at consetetur sadipscing sit kasd. Accusam elitr sanctus magna erat lorem et et diam sed,.</p>
            </div>

         </div>
     
      
   </section>
   <section  class="section has-background-light">
      <div class="container  is-small has-text-centered">
         <div class="columns">
            <div class="column is-half is-offset-one-quarter">
               <h1 class="title is-spaced">Mes Compétences</h1>
            </div>
         </div>
         <div class="columns">
            <div class="column">
               <article class="BundleCard card">
                  <header class="card-header">
                     <p class="card-header-title">
                        Développement
                     </p>
                  </header>
                  <div class="card-content is-flex is-horizontal-center">
                     <div class="columns">
                        <div class="column">
                           <figure class="image is-48x48 is-inline-block tooltip competence"
                              data-tooltip="Tooltip Text"><img class="icone-comp" src="../../static/img/images/git.png" /></figure>
                           <figure class="image is-48x48 is-inline-block competence" data-id="1"><img
                                 src="../../static/img/images/csharp.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/js.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/php.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/xamarin.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/symfony.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/laravel.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/azure.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/html.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/sql.png"/></figure>
                        </div>
                     </div>
                  </div>
               </article>
            </div>

            <div class="column">
               <article class="BundleCard card">
                  <header class="card-header">
                     <p class="card-header-title">Système & Réseau</p>
                  </header>
                  <div class="card-content is-flex is-horizontal-center">
                     <div class="columns">
                        <div class="column">
                           <figure class="image is-48x48 is-inline-block tooltip competence"
                              data-tooltip="Tooltip Text"><img src="../../static/img/images/zabbix.png"/></figure>
                           <figure class="image is-48x48 is-inline-block truc competence" data-id="1"><img
                                 src="../../static/img/images/graylog.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/apache.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/mariadb.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/cisco.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/windows.png"/></figure>
                           <figure class="image is-48x48 is-inline-block competence"><img
                                 src="../../static/img/images/vmware.png"/></figure>
                        </div>
                     </div>
                  </div>

               </article>
            </div>
         </div>
      </div>



   </section>

</div>



     
      </main>
    </Layout>




  );
}
