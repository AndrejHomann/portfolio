import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Service wird global bereitgestellt
})

export class SkillsTemplateService {
    languageData: {
        english: {
          skillsTitle: string;
          skillsTextTop: string;
          skillsTextBottom: string;
        };
        german: {
          skillsTitle: string;
          skillsTextTop: string;
          skillsTextBottom: string;
        };
      } = {
        english: {
          skillsTitle: 'Skills',
          skillsTextTop: 'I am currently learning',
          skillsTextBottom: 'because lifelong learning is essential to keep up with the constantly evolving technologies.',
        },
        german: {
          skillsTitle: 'Skills',
          skillsTextTop: 'Aktuell lerne ich',
          skillsTextBottom: 'weil lebenslanges Lernen essenziell ist, um Schritt zu halten mit der konstanten Weiterentwicklung der Technologien.',
        }
      };
}