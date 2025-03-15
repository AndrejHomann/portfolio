import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})

export class ContactTemplateService {
  languageData: {
      english: {
        contactTitle: string;
        introText: string;
        phoneLabel: string;
        nameLabel: string;
        nameValidationText: string;
        emailLabel: string;
        emailValidationText: string;
        messageLabel: string;
        messageValidationText: string;
        privacyPolicyTextPartOne: string;
        privacyPolicyTextPartTwo: string;
        privacyPolicyTextPartThree: string;
        privacyPolicyValidationText: string;
        sendLabel: string;
      };
      german: {
        contactTitle: string;
        introText: string;
        phoneLabel: string;
        nameLabel: string;
        nameValidationText: string;
        emailLabel: string;
        emailValidationText: string;
        messageLabel: string;
        messageValidationText: string;
        privacyPolicyTextPartOne: string;
        privacyPolicyTextPartTwo: string;
        privacyPolicyTextPartThree: string;
        privacyPolicyValidationText: string;
        sendLabel: string;
      };
    } = {
      english: {
        contactTitle: 'Contact',
        introText: 'Still not sure if I am the right person for your project? Don\'t hesitate to contact me.',
        phoneLabel: 'Phone',
        nameLabel: 'Your name',
        nameValidationText: 'Please enter a forename and a surname',
        emailLabel: 'Your email',
        emailValidationText: 'Please enter a valid email address',
        messageLabel: 'Your message',
        messageValidationText: 'Please enter at least 5 characters',
        privacyPolicyTextPartOne: 'I have read the',
        privacyPolicyTextPartTwo: 'privacy policy',
        privacyPolicyTextPartThree: 'and agree to the processing of my data as outlined.',
        privacyPolicyValidationText: 'Please accept the privacy policy to send a message',
        sendLabel: 'Send'
      },
      german: {
        contactTitle: 'Kontakt',
        introText: 'Sie sind sich immer noch nicht sicher, ob ich die richtige Person für Ihr Projekt bin? Zögern Sie nicht, mich zu kontaktieren.',
        phoneLabel: 'Telefon',
        nameLabel: 'Ihr Name',
        nameValidationText: 'Bitte geben Sie einen Vor- und Nachnamen ein.',
        emailLabel: 'Ihre E-Mail',
        emailValidationText: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        messageLabel: 'Ihre Nachricht',
        messageValidationText: 'Bitte geben Sie mindestens 5 Zeichen ein.',
        privacyPolicyTextPartOne: 'Ich habe die',
        privacyPolicyTextPartTwo: 'Datenschutzrichtlinie',
        privacyPolicyTextPartThree: 'gelesen und bin mit der Verarbeitung meiner Daten, wie beschrieben, einverstanden.',
        privacyPolicyValidationText: 'Bitte akzeptieren Sie die Datenschutzrichtlinie, um eine Nachricht zu senden.',
        sendLabel: 'Senden'
      }
    };
}