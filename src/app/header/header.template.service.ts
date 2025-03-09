import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Service wird global bereitgestellt
})

export class HeaderTemplateService {
  languageData: {
      english: {
        aboutMeTitle: string;
        skillsTitle: string;
        projectsTitle: string;
        contactTitle: string;
      };
      german: {
        aboutMeTitle: string;
        skillsTitle: string;
        projectsTitle: string;
        contactTitle: string;
      };
    } = {
      english: {
        aboutMeTitle: 'About Me',
        skillsTitle: 'Skills',
        projectsTitle: 'Projects',
        contactTitle: 'Contact'
      },
      german: {
        aboutMeTitle: 'Über Mich',
        skillsTitle: 'Skills',
        projectsTitle: 'Projekte',
        contactTitle: 'Kontakt'
      }
    };
}