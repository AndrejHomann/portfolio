import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})

export class AboutMeTemplateService {
  languageData: {
    english: {
      aboutMeTitle: string;
      TextLineOne: string;
      TextLineTwo: string;
      TextLineThree: string;
      TextLineFour: string;
      TextLineFive: string;
    };
    german: {
      aboutMeTitle: string;
      TextLineOne: string;
      TextLineTwo: string;
      TextLineThree: string;
      TextLineFour: string;
      TextLineFive: string;
    };
  } = {
    english: {
      aboutMeTitle: 'About Me',
      TextLineOne: 'I am a Frontend Web Developer based in Greven, Germany.',
      TextLineTwo: 'Coding gives me the opportunity to use my strengths to apply structured problem-solving.',
      TextLineThree: 'Every project is a new opportunity to bring my ideas to life and',
      TextLineFour: 'make a tangible impact on how people interact with digital products.',
      TextLineFive: 'Besides that creating good looking interfaces with seamless user experience is appealing to me.'
    },
    german: {
      aboutMeTitle: 'Über Mich',
      TextLineOne: 'Ich bin ein Frontend-Webentwickler mit Sitz in Greven, Deutschland.',
      TextLineTwo: 'Mit Programmierung habe ich die Möglichkeit, meine Stärken zur strukturierten Problemlösung einzusetzen.',
      TextLineThree: 'Jedes Projekt ist eine neue Gelegenheit, meine Ideen zum Leben zu erwecken und',
      TextLineFour: 'einen spürbaren Einfluss auszuüben, wie Menschen mit digitalen Produkten interagieren.',
      TextLineFive: 'Darüber hinaus reizt es mich, gut aussehende Schnittstellen mit einem nahtlosen Benutzererlebnis zu erschaffen.'
    }
  };
}