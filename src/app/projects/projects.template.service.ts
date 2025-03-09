import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Service wird global bereitgestellt
})

export class ProjectsTemplateService {
  languageData: {
      english: {
        projectTitle: string;
        techTitle: string;
        about: string;
        joinDuration: string;
        joinType: string;
        joinDescription: string;
        joinOrganizationTitle: string;
        joinOrganizationTextOne: string;
        joinOrganizationTextTwo: string;
        joinOrganizationTextThree: string;
        joinExperienceTitle: string;
        joinExperienceTextOne: string; 
        joinExperienceTextTwo: string;
        joinExperienceTextThree: string;
        eplDuration: string;
        eplType: string;
        eplDescription: string;
        eplOrganizationTitle: string;
        eplOrganizationTextOne: string;
        eplOrganizationTextTwo: string;
        eplOrganizationTextThree: string;
        eplExperienceTitle: string;
        eplExperienceText: string; 
      };
      german: {
        projectTitle: string;
        techTitle: string;
        about: string;
        joinDuration: string;
        joinType: string;
        joinDescription: string;
        joinOrganizationTitle: string;
        joinOrganizationTextOne: string;
        joinOrganizationTextTwo: string;
        joinOrganizationTextThree: string;
        joinExperienceTitle: string;
        joinExperienceTextOne: string; 
        joinExperienceTextTwo: string;
        joinExperienceTextThree: string;
        eplDuration: string;
        eplType: string;
        eplDescription: string;
        eplOrganizationTitle: string;
        eplOrganizationTextOne: string;
        eplOrganizationTextTwo: string;
        eplOrganizationTextThree: string;
        eplExperienceTitle: string;
        eplExperienceText: string; 
      };
    } = {
      english: {
        projectTitle: 'Projects',
        techTitle: 'Technologies',
        about: 'About the project',
        joinDuration: 'Duration: 5 months',
        joinType: 'Type: Group work',
        joinDescription: 'Join is a kanban board build as a multi page application. It visualizes the workflow within a team by organizing work on time and responsibility dimensions.',
        joinOrganizationTitle: 'How I organized the work process',
        joinOrganizationTextOne: 'Within our team of four persons we splitted the tasks evenly.',
        joinOrganizationTextTwo: 'I was responsible for creating a new project in Firebase and GitHub for and establishing the connection to our Join application.',
        joinOrganizationTextThree: 'Besides that I coded the summary page and helped with the header, board and addTask sections.',
        joinExperienceTitle: 'My group work experience',
        joinExperienceTextOne: 'Unfortunately one of our team members has silently withdrawn from our project.',
        joinExperienceTextTwo: 'So we had to divide the undone tasks of this person among us, which has extended the planned time horizon for our project from the original three months to five months.',
        joinExperienceTextThree: 'Because of this unexpected situation I have learned a lot more things and strengthened my resilience and patience.',
        eplDuration: 'Duration: 3 weeks',
        eplType: 'Type: solo project',
        eplDescription: 'El Pollo Loco is a jump and run browser game, where the main character Pepe collects different items to win against different types of enemy chicken and to defeat an endboss.',
        eplOrganizationTitle: 'How I organized the work process',
        eplOrganizationTextOne: 'At first I had to learn about classes and how they work.',
        eplOrganizationTextTwo: 'The next step was to build the basic game design (background, main character, enemies, etc.)',
        eplOrganizationTextThree: 'Finally I brought the game to life by adding gravity, animations and physical behaviour between objects (collisions).',
        eplExperienceTitle: 'My project experience',
        eplExperienceText: 'I have learned that defining and using classes to repeatedly create objects, shortens the code extremely and improves the overview over the project.'
      },
      german: {
        projectTitle: 'Projekte',
        techTitle: 'Technologien',
        about: 'Über das Projekt',
        joinDuration: 'Dauer: 5 Monate',
        joinType: 'Typ: Gruppenarbeit',
        joinDescription: 'Join ist ein Kanban Board, gebaut als Multi Page Applikation. Es visualisiert den Workflow innerhalb eines Teams, indem die Arbeit auf Zeit- und Verantwortlichkeitsdimensionen organisiert wird.',
        joinOrganizationTitle: 'Wie ich den Arbeitsprozess mit meinem Team organisiert habe',
        joinOrganizationTextOne: 'Innerhalb unseres Teams, welches aus vier Personen bestand, teilten wir die Aufgaben gleichmäßig untereinander auf.',
        joinOrganizationTextTwo: 'Ich war verwantwortlich für die Erstellung eines neuen Projekts in Firebase und GitHub und für die Verbindung zu unserer Join Applikation.',
        joinOrganizationTextThree: 'Außerdem habe ich die Zusammenfassungsseite programmiert und geholfen bei den Header-, Board- und AddTask-Bereichen.',
        joinExperienceTitle: 'Meine Gruppenarbeitserfahrung',
        joinExperienceTextOne: 'Leider hat sich eines unserer Teammitglieder stillschweigend aus unserem Projekt zurückgezogen.',
        joinExperienceTextTwo: 'Daher mussten wir die unerledigten Aufgaben dieser Person unter uns aufteilen, wodurch sich der geplante Zeithorizont für unser Projekt von ursprünglich drei Monaten auf fünf Monate verlängert hat.',
        joinExperienceTextThree: 'Aufgrund dieser unerwarteten Situation habe ich noch viel mehr gelernt und meine Belastbarkeit und Geduld gestärkt.',
        eplDuration: 'Dauer: 3 Wochen',
        eplType: 'Typ: Einzelprojekt',
        eplDescription: 'El Pollo Loco ist ein Jump-and-Run-Browserspiel, in dem die Hauptfigur Pepe verschiedene Gegenstände sammelt, um gegen verschiedene Typen von feindlichen Hühnern zu gewinnen und einen Endboss zu besiegen.',
        eplOrganizationTitle: 'Wie ich meinen Arbeitsprozess organisierte',
        eplOrganizationTextOne: 'Zuerst musste ich etwas über Klassen lernen und wie sie funktionieren.',
        eplOrganizationTextTwo: 'Der nächste Schritt bestand darin, das grundlegende Spieldesign zu erstellen (Hintergrund, Hauptfigur, Feinde, etc.)',
        eplOrganizationTextThree: 'Schließlich habe ich das Spiel durch das Hinzufügen von Schwerkraft, Animationen und physischem Verhalten zwischen Objekten (Kollisionen) zum Leben erweckt.',
        eplExperienceTitle: 'Meine Projekterfahrung',
        eplExperienceText: 'Ich habe gelernt, dass die Definition und Verwendung von Klassen zum wiederholten Erstellen von Objekten den Code extrem verkürzt und die Übersicht über das Projekt verbessert.'
      }
    };
}