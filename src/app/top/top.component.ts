import { Component, ViewChild, ElementRef, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss', './top.component.responsive.scss']
})

export class TopComponent implements OnInit {
  @Input() language: 'english' | 'german' = 'english';
  @Output() languageChanged = new EventEmitter<'english' | 'german'>();
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(
    private elRef: ElementRef, 
    private languageService: LanguageService, 
    private router: Router,
    private appComponent: AppComponent
  ) {}
  
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

  highlightDeButton() {
    const { nativeElement } = this.elRef;
    nativeElement.querySelector('#germanContainer').classList.toggle('mark', true);
    nativeElement.querySelector('#germanContainer').classList.toggle('unmark', false);
    nativeElement.querySelector('#englishContainer').classList.toggle('mark', false);
    nativeElement.querySelector('#englishContainer').classList.toggle('unmark', true);
    nativeElement.querySelector('#german').style.color = "white";
    nativeElement.querySelector('#english').style.color = "black";
  }

  highlightEnButton() {
    const { nativeElement } = this.elRef;
    nativeElement.querySelector('#germanContainer').classList.toggle('mark', false);
    nativeElement.querySelector('#germanContainer').classList.toggle('unmark', true);
    nativeElement.querySelector('#englishContainer').classList.toggle('mark', true);
    nativeElement.querySelector('#englishContainer').classList.toggle('unmark', false);
    nativeElement.querySelector('#german').style.color = "black";
    nativeElement.querySelector('#english').style.color = "white";
  }

  ngOnInit() {
    if (this.language == "german") {
      this.highlightDeButton();
    }
    if (this.language == "english") {
      this.highlightEnButton();
    }
  }

  showGerman() {
    if (this.language !== "german") {
      this.language = "german";
      this.languageChanged.emit(this.language); 
    }
    this.highlightDeButton();
    this.languageService.setLanguage(this.language);
  }

  showEnglish() {
    if (this.language !== "english") {
      this.language = "english";
      this.languageChanged.emit(this.language); 
    }
    this.highlightEnButton();
    this.languageService.setLanguage(this.language);
  }

  navigateTo(section: string) {
    this.router.navigate([], { fragment: section }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            window.scrollBy(0, 100);
          }, 700);
        } else {
          console.warn('Element not found:', section);
        }
      }, 100);
    });
  }
}