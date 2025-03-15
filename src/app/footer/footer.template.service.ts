import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})

export class FooterTemplateService {
  languageData: {
      english: {
        imprint: string;
        privacy: string;
      };
      german: {
        imprint: string;
        privacy: string;
      };
  } = {
      english: {
        imprint: 'Imprint',
        privacy: 'Privacy Policy'
      },
      german: {
        imprint: 'Impressum',
        privacy: 'Datenschutzrichtlinie'
      }
  };
}