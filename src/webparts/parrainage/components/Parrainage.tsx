import * as React from 'react';
import styles from './Parrainage.module.scss';
import type { IParrainageProps } from './IParrainageProps';

export default class Parrainage extends React.Component<IParrainageProps, {}> {
  public render(): React.ReactElement<IParrainageProps> {
    return (
      <div className={styles.container}>

        <img src={require('../assets/906fbd7bcbc286555ab5c25c45044af0.png')} alt="Header" className={styles.header} />

        <h2>1-Objectif:</h2>
        <p>Cette instruction détaille les étapes à suivre pour intégrer le parrainage comme Canal de Sourcing, de l'initiation à la conclusion du processus, conformément aux normes internes.</p>

        <div className={styles.context}>
          <h2>2-Contexte:</h2>
          <p>Le parrainage constitue un moyen de sourcing qui permet l’augmentation du flux des candidatures reçues par le pôle recrutement. L’objectif de la démarche est d’aider l’entreprise à atteindre ses objectifs quantitatifs et qualitatifs en matière de recrutement dans le respect des délais fixés par les Opérations.</p>
        </div>

        <div className={styles.principle}>
          <h2>3-Principe:</h2>
          <p>Le parrainage est l’action par laquelle un employé de Cnexia recommande formellement (voire démarche du parrainage) au département People une personne de son entourage pour occuper un poste au sein de l’entreprise.</p>
        </div>

        <div className={styles.participants}>
          <h2>4-Les intervenants:</h2>
          <ul>
            <li>Direction du site</li>
            <li>People and culture</li>
            <li>Chargé de recrutement</li>
            <li>Talent Acquisition Manager</li>
          </ul>
        </div>

        <div className={styles.modalites}>
          <h2>5-Modalités d’attribution de la prime de parrainage:</h2>
          <h4>BARÈME et MODALITÉS PRIMES DE PARRAINAGE</h4>
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Poste</th>
                <th>Montant prime brut</th>
                <th>Échéance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>CRM</td>
                <td>Conseiller Client Francophone</td>
                <td>1500,00 MAD</td>
                <td rowSpan={2}>Confirmation du filleul</td>
              </tr>
              <tr>
                <td>Conseiller Client Anglophone</td>
                <td>2000,00 MAD</td>
              </tr>
              <tr>
                <td rowSpan={3}>Tech</td>
                <td>Séniorité de 1 à 3 ans</td>
                <td>4500,00 MAD</td>
                <td rowSpan={3}>50% après 3 mois <br />et 50% après 6 mois</td>
              </tr>
              <tr>
                <td>Séniorité de 3 à 5 ans</td>
                <td>6000,00 MAD</td>
              </tr>
              <tr>
                <td>Séniorité de 6 ans et plus</td>
                <td>7500,00 MAD</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className={styles.eligibilite}>
          <h2>6-Éligibilité:</h2>
          <p>Tous les employés de Cnexia à part les rôles indiqués ci-dessous :</p>
          <h3>Parrainage Call center</h3>
          <ul>
            <li>Chargés de recrutement</li>
            <li>Operations Managers</li>
            <li>Directeurs de production</li>
            <li>VP Operations</li>
          </ul>
          <h3>Parrainage Tech</h3>
          <ul>
            <li>Chargés de recrutement</li>
            <li>Service delivery Managers</li>
            <li>Team leaders</li>
            <li>Directeur stratégie et développement</li>
          </ul>
        </div>

        <div className={styles.steps}>
          <h1>Les étapes du processus de parrainage:</h1>
          <ol>
            <li>
              <h3>La démarche à suivre par le parrain:</h3>
              <p>
                Le parrain doit ouvrir un ticket sur l’outil Vivantio en suivant la démarche suivante : Adresser le CV du filleul à l’adresse&nbsp;
                <a href="mailto:parrainages@cnexia.com" className={styles.emailLink}>parrainages@cnexia.com</a>
                &nbsp;en indiquant :
              </p>

              <div className={styles.email}>
                <p>Dans l’objet du mail : Cnexia-Parrainage + la ville (Rabat ou Fès)</p>
                <p>Dans la corp du mail : ID boost + Nom et prénom du parrain + profil du filleul (francophone ou bilingue).</p>
              </div>
            </li>
            <li>
              <h3>Étapes et application de l’instruction de parrainage par le recrutement:</h3>
              <ol>
                <li>
                  <p>L’équipe recrutement reçoit un courriel d’alerte parrainage généré par le système.</p>
                </li>
                <li>
                  <p>Le recruteur accède à l’espace parrainage au niveau de l’outil Vivantio et procède à la qualification de la candidature. À chaque changement de statut, le parrain recevra un e-mail de notification l’informant du statuts de son parrainage.</p>
                </li>
                <li>
                  <p>En parallèle avec le work flow du système : Renseigner un tableau de suivi du parrainage avec les informations permettant de garder un suivi consolidé et extraire les informations chaque début de mois pour adresse la demande d’attribution des primes au département concerné.</p>
                </li>
                <li>
                  <p>Dès que l’agent parrainé atteint l’ancienneté spécifiée dans les modalités d’attribution de la prime, le chargé de recrutement ferme le ticket dans Vivantio et transmet le tableau de suivis à jour au Talent Acquisition Manager pour validation avant le 5 du mois et au responsable People Operations du site pour attribution du bonus de cooptation avant le 9 du mois comme délai de rigueur.</p>
                </li>
              </ol>
            </li>
          </ol>
        </div>

      </div>
    );
  }

}






