import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss', './top.component.responsive.scss']
})

export class TopComponent {
  @Input() language: 'english' | 'german' = 'english';
  @Output() languageChanged = new EventEmitter<'english' | 'german'>();
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(private elRef: ElementRef, private languageService: LanguageService) {}
  
  menuOpen = false;
  hamburgerAnimation() {
    const hamMenuButton = document.getElementById('hamburger');
    const profilePic = document.getElementById('profilePicture');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamMenuButton && window.innerWidth <=375) {
      this.menuOpen = !this.menuOpen;
      hamMenuButton.classList.toggle('open', this.menuOpen);
      profilePic?.classList.toggle('hide', this.menuOpen);
      mobileMenu?.classList.toggle('hide', !this.menuOpen);
      mobileMenu?.classList.toggle('show', this.menuOpen);
    }
  }

  @ViewChild('germanContainer', { static: false }) germanButton!: ElementRef;
  @ViewChild('englishContainer', { static: false }) englishButton!: ElementRef;

  showGerman() {
    if (this.language !== "german") {
      this.language = "german";
      this.languageChanged.emit(this.language); // Parent Component benachrichtigen
    }
    const { nativeElement } = this.elRef;
    nativeElement.querySelector('#germanContainer').classList.toggle('mark', true);
    nativeElement.querySelector('#germanContainer').classList.toggle('unmark', false);
    nativeElement.querySelector('#englishContainer').classList.toggle('mark', false);
    nativeElement.querySelector('#englishContainer').classList.toggle('unmark', true);
    nativeElement.querySelector('#german').style.color = "white";
    nativeElement.querySelector('#english').style.color = "black";

    this.languageService.setLanguage(this.language);
  }

  showEnglish() {
    if (this.language !== "english") {
      this.language = "english";
      this.languageChanged.emit(this.language); // Parent Component benachrichtigen
    }
    const { nativeElement } = this.elRef;
    nativeElement.querySelector('#germanContainer').classList.toggle('mark', false);
    nativeElement.querySelector('#germanContainer').classList.toggle('unmark', true);
    nativeElement.querySelector('#englishContainer').classList.toggle('mark', true);
    nativeElement.querySelector('#englishContainer').classList.toggle('unmark', false);
    nativeElement.querySelector('#german').style.color = "black";
    nativeElement.querySelector('#english').style.color = "white";

    this.languageService.setLanguage(this.language);
  }
}