import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ContactTemplateService } from './contact.template.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'; // Importiere NgForm
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IntersectionObserverDirective } from '../intersection-observer.directive';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, IntersectionObserverDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', 'contact.component.responsive.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(0)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [
        animate('1000ms ease-out')
      ])
    ])
  ]
})

export class ContactComponent implements AfterViewInit {
  isVisible = false;
  onIntersection(isIntersecting: boolean) {
    this.isVisible = isIntersecting;
  }

  @Input() language: 'english' | 'german' = 'english'; 

  constructor(private router: Router, private elRef: ElementRef, public contactTemplateService: ContactTemplateService, private http: HttpClient) {}

  public isPrivacyPage = false;
  @Output() privacyClicked = new EventEmitter<boolean>();
  showPrivacyPage(event: Event): void {
    event.preventDefault();  
    this.privacyClicked.emit(true);
    this.isPrivacyPage = true;
    this.router.navigate(['/privacy', this.language]).then(() => {
      window.scrollTo({ top: 0 });
    });
  } 

  @ViewChild('nameInput', { static: false }) nameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('mailInput', { static: false }) eMailInput!: ElementRef<HTMLInputElement>;
  @ViewChild('messageInput', { static: false }) messageInput!: ElementRef<HTMLInputElement>;
  @ViewChild('checkbox', { static: false }) checkbox!: ElementRef<HTMLInputElement>;
  @ViewChild('sendButton', { static: false }) sendButton!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    const nameInput = this.elRef.nativeElement.querySelector('#nameInput') as HTMLInputElement;
    const emailInput = this.elRef.nativeElement.querySelector('#mailInput') as HTMLInputElement;
    const messageInput = this.elRef.nativeElement.querySelector('#messageInput') as HTMLInputElement;
    const checkbox = this.elRef.nativeElement.querySelector('#checkboxInput') as HTMLInputElement;
    const sendButton = this.elRef.nativeElement.querySelector('#sendButton') as HTMLElement;
    this.addEventListenerToInput(nameInput, emailInput, messageInput, checkbox, sendButton);
    this.addBlurListener(nameInput, 'nameInputInfoText', this.validateName);
    this.addBlurListener(emailInput, 'mailInputInfoText', this.validateEmail);
    this.addBlurListener(messageInput, 'messageInputInfoText', this.validateMessage);
    checkbox.addEventListener('change', () => this.validateForm(nameInput, emailInput, messageInput, checkbox, sendButton));
    sendButton.addEventListener('click', () => this.resetForm(nameInput, emailInput, messageInput, checkbox, sendButton));
  }

  addEventListenerToInput(nameInput: HTMLInputElement, emailInput: HTMLInputElement, messageInput: HTMLInputElement, checkbox: HTMLInputElement, sendButton: HTMLElement) {
    [nameInput, emailInput, messageInput].forEach(input => {
      input.addEventListener('keyup', () => this.validateForm(nameInput, emailInput, messageInput, checkbox, sendButton));
      input.addEventListener('keydown', this.preventEnterKey);
    });
  }

  preventEnterKey(event: KeyboardEvent): void {
    if (event.key === 'Enter') event.preventDefault();
  }

  addBlurListener(input: HTMLInputElement, infoTextId: string, validationFn: (value: string) => boolean): void {
    input.addEventListener('blur', () => {
      const isValid = validationFn(input.value);
      this.toggleValidationMessage(infoTextId, isValid);
    });
  }

  toggleValidationMessage(infoTextId: string, isValid: boolean): void {
    const element = this.elRef.nativeElement.querySelector(`#${infoTextId}`) as HTMLElement;
    element.classList.toggle('show', !isValid);
    element.classList.toggle('hide', isValid);
  }

  resetForm(nameInput: HTMLInputElement, emailInput: HTMLInputElement, messageInput: HTMLInputElement, checkbox: HTMLInputElement, sendButton: HTMLElement): void {
    if (sendButton.style.cursor === 'pointer') {
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
      checkbox.checked = false;
      this.validateForm(nameInput, emailInput, messageInput, checkbox, sendButton);
    }
  }

  validateForm(nameInput: HTMLInputElement, emailInput: HTMLInputElement, messageInput: HTMLInputElement, checkbox: HTMLInputElement, sendButton: HTMLElement): void {
    const isNameValid = this.validateName(nameInput.value);
    const isEmailValid = this.validateEmail(emailInput.value);
    const isMessageValid = this.validateMessage(messageInput.value);
    const isCheckboxChecked = checkbox.checked;
    if (!isCheckboxChecked && isNameValid && isEmailValid && isMessageValid) {
      this.toggleValidationMessage('nameInputInfoText', isNameValid);
      this.toggleValidationMessage('mailInputInfoText', isEmailValid);
      this.toggleValidationMessage('messageInputInfoText', isMessageValid);
    }
    this.validateCheckbox(isNameValid, isEmailValid, isMessageValid, isCheckboxChecked);
    this.toggleButtonState(isNameValid && isEmailValid && isMessageValid && isCheckboxChecked, sendButton);
  }

  validateCheckbox(isNameValid: boolean, isEmailValid: boolean, isMessageValid: boolean, isCheckboxChecked: any) {
    if (isNameValid && isEmailValid && isMessageValid) {  
      this.toggleCheckboxValidationMessage(isCheckboxChecked);
    } else {
      const ppCheckboxInfoText = this.elRef.nativeElement.querySelector('#ppCheckboxInfoText') as HTMLElement;
      ppCheckboxInfoText.classList.add('hide');
      ppCheckboxInfoText.classList.remove('show');
    }
  }

  toggleCheckboxValidationMessage(isChecked: boolean): void {
    const ppCheckboxInfoText = this.elRef.nativeElement.querySelector('#ppCheckboxInfoText') as HTMLElement;
    if (!isChecked) {
      ppCheckboxInfoText.classList.add('show');
      ppCheckboxInfoText.classList.remove('hide');
    } else {
      ppCheckboxInfoText.classList.remove('show');
      ppCheckboxInfoText.classList.add('hide');
    }
  }

  toggleButtonState(isValid: boolean, sendButton: HTMLElement): void {
    if (isValid) {
      sendButton.classList.add('valid');
      sendButton.classList.remove('invalid');
    } else {
      sendButton.classList.add('invalid');
      sendButton.classList.remove('valid');
    }
  }

  validateName(name: string): boolean { return name.split(' ').length >= 2 && name.split(' ').every(part => part.length >= 3); }
  validateEmail(email: string): boolean { return /^[^\s@]+@[^\s@]+\.(com|de|net|org|info|edu|gov)$/i.test(email); }
  validateMessage(message: string): boolean { return message.length >= 5 && message.length <= 1000; }

  showPopup() {
    document.getElementById('popupOverlay')?.classList.add('showPopup');
    document.getElementById('popupOverlay')?.classList.remove('hidePopup');
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    document.getElementById('popupOverlay')?.classList.add('hidePopup');
    document.getElementById('popupOverlay')?.classList.remove('showPopup');
    document.body.style.overflow = 'auto';
  }

  sendButtonClicked() {
    // this.showPopup();

    this.sendMail(
      this.nameInput.nativeElement.value, 
      this.eMailInput.nativeElement.value,
      this.messageInput.nativeElement.value
    );
    this.nameInput.nativeElement.value = "";
    this.eMailInput.nativeElement.value = "";
    this.messageInput.nativeElement.value = "";
    const checkbox = this.checkbox.nativeElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox.checked = false;
    this.toggleButtonState(false, this.sendButton.nativeElement);
  }

  sendMail(name: string, email: string, message: string) {
    const contactData = {
      name: name,
      email: email,
      message: message
    };
    emailjs
      .send('gmail_send_email_to_me', 'portfolio_contact_form', contactData, 'EqETlweoA9cJ76ZwE')
      .then(
        () => {
          console.log('SUCCESS!');
          this.showPopup();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

  navigateTo(section: string) {
    this.router.navigate([], { fragment: section }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.warn('Element not found:', section);
        }
      }, 100);
    });
  }
}