import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LanguageService {
  private languageSubject = new BehaviorSubject<'english' | 'german'>('english');
  language$ = this.languageSubject.asObservable();

  setLanguage(lang: 'english' | 'german') {
    this.languageSubject.next(lang);
  }
}