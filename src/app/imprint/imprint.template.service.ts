import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Service wird global bereitgestellt
})

export class ImprintTemplateService {
  languageData: {
    english: {
      imprintTitle: string;
      responsible: string;
      address: string;
      contact: string;
      phone: string;
      hints: string;
      copyrightHints: string;
      text1: string;
      text2: string;
      text3: string;
      text4: string;
    };
    german: {
      imprintTitle: string;
      responsible: string;
      address: string;
      contact: string;
      phone: string;
      hints: string;
      copyrightHints: string;
      text1: string;
      text2: string;
      text3: string;
      text4: string;
    };
  } = {
    english: {
      imprintTitle: 'Imprint',
      responsible: 'Responsible person',
      address: 'Postal address',
      contact: 'Contact',
      phone: 'Phone: 0176 8415 1327',
      hints: 'Notes on the website',
      copyrightHints: 'Copyright Notices',
      text1: 'Responsible for journalistic-editorial content',
      text2: 'This imprint was created with the help of',
      text3: 'Imprint generator from activeMind AG',
      text4: 'created (version 2024-07-05).'
    },
    german: {
      imprintTitle: 'Impressum',
      responsible: 'Verantwortliche(r)',
      address: 'Postanschrift',
      contact: 'Kontakt',
      phone: 'Telefon: 0176 8415 1327',
      hints: 'Hinweise zur Website',
      copyrightHints: 'Urheberrechtliche Hinweise',
      text1: 'Verantwortlich für journalistisch-redaktionelle Inhalte',
      text2: 'Dieses Impressum wurde mit Hilfe des',
      text3: 'Impressums-Generators der activeMind AG',
      text4: 'erstellt (Version 2024-07-05).'
    }
  };
}