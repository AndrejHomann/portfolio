import { Component, ViewChild, ElementRef, Output, EventEmitter,  Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderTemplateService } from './header.template.service';
import { Router, NavigationExtras } from '@angular/router';
import { LanguageService } from '../language.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IntersectionObserverDirective } from '../intersection-observer.directive';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.responsive.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-80%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', [
        animate('500ms ease-out')
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit {
  isVisible = false;
  onIntersection(isIntersecting: boolean) {
    this.isVisible = isIntersecting;
  }

  @Input() legalDesktop: boolean = false;
  @Input() legalMobile: boolean = false;
  @Input() language: 'english' | 'german' = 'english';
  @Output() languageChanged = new EventEmitter<'english' | 'german'>(); 

  constructor(
    private elRef: ElementRef, 
    public headerTemplateService: HeaderTemplateService, 
    private languageService: LanguageService, 
    private router: Router,
    private appComponent: AppComponent
  ) {}

  @ViewChild('germanContainer', { static: false }) germanButton!: ElementRef;
  @ViewChild('englishContainer', { static: false }) englishButton!: ElementRef;
  @ViewChild('header', { static: false }) header!: ElementRef;

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

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   const { nativeElement } = this.elRef;
  //   const headerElement = nativeElement.querySelector('#header');
  //   const bodyElement = document.body;
  //   if(this.appComponent.isImprintPage == true || this.appComponent.isPrivacyPage == true) {
  //     headerElement.classList.add('fixed');
  //     bodyElement.style.paddingTop = `100px`;
  //   }
  //   if(this.appComponent.isImprintPage == false && this.appComponent.isPrivacyPage == false) {
  //     if (window.scrollY > window.innerHeight) {
  //       headerElement.classList.add('fixed');
  //     } else {
  //       headerElement.classList.remove('fixed');
  //     }
  //   }
  // }

  ngOnInit() {
    this.updateWindowWidth();
    if (this.language == "german") {
      this.highlightDeButton();
    }
    if (this.language == "english") {
      this.highlightEnButton();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateWindowWidth();
  }

  windowWidth: number = window.innerWidth;
  updateWindowWidth() {
    this.windowWidth = window.innerWidth;
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

  // navigateTo(section: string) {
  //   this.router.navigate([], { fragment: section }).then(() => {
  //     setTimeout(() => {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //       } else {
  //         console.warn('Element not found:', section);
  //       }
  //     }, 100);
  //     this.appComponent.resetImprintPage();
  //     this.appComponent.resetPrivacyPage();
  //   });
  // }

  
  navigateTo(section: string) {
    if(this.appComponent.isImprintPage == false || this.appComponent.isPrivacyPage == false) {
      this.router.navigate([], { fragment: section }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
              window.scrollBy(0, -100);
            }, 700);
          } else {
            console.warn('Element not found:', section);
          }
        }, 100);
      });
    }
    if(this.appComponent.isImprintPage == true || this.appComponent.isPrivacyPage == true) {
      this.router.navigate([], { fragment: section }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
              window.scrollBy(0, -50);
            }, 900);
          } else {
            console.warn('Element not found:', section);
          }
        }, 100);
        this.appComponent.resetImprintPage();
        this.appComponent.resetPrivacyPage();
      });
    }
  }
}
