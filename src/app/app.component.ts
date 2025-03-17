import { Component, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet, NavigationStart } from '@angular/router';
import { TopComponent } from './top/top.component'; 
import { HeaderComponent } from './header/header.component'; 
import { AboutMeComponent } from './about-me/about-me.component'; 
import { SkillsComponent } from './skills/skills.component'; 
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'; 
import { ImprintComponent } from './imprint/imprint.component'; 
import { PrivacyComponent } from './privacy/privacy.component'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    RouterOutlet, 
    TopComponent, 
    HeaderComponent, 
    AboutMeComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    ContactComponent, 
    FooterComponent, 
    ImprintComponent, 
    PrivacyComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'testproject';

  constructor(
    private router: Router,
    private elRef: ElementRef, 
    private location: Location
  ) {}
  
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    sessionStorage.setItem('lastRoute', this.router.url);
    sessionStorage.setItem('isImprintPage', this.isImprintPage ? 'true' : 'false');
    sessionStorage.setItem('isPrivacyPage', this.isPrivacyPage ? 'true' : 'false');
  }

  ngOnInit() {
    const lastRoute = sessionStorage.getItem('lastRoute');
    const isImprintPageStored = sessionStorage.getItem('isImprintPage') === 'true';
    const isPrivacyPageStored = sessionStorage.getItem('isPrivacyPage') === 'true';
    if (isImprintPageStored == true) {
      this.isImprintPage = true;
      this.isPrivacyPage = false;
    } 
    if (isPrivacyPageStored == true) {
      this.isImprintPage = false;
      this.isPrivacyPage = true;
    } 
  }

  selectedLanguage: 'english' | 'german' = 'english';

  onLanguageChanged(language: 'english' | 'german') {
    this.selectedLanguage = language;
  }

  isImprintPage: boolean = false; 
  isPrivacyPage: boolean = false; 

  onShowImprintPage(isImprint: boolean) {
    this.isImprintPage = true;
    this.isPrivacyPage = false;
  }

  onShowPrivacyPage(isPrivacy: boolean) {
    this.isImprintPage = false;
    this.isPrivacyPage = true;
  }

  resetImprintPage() {
    this.isImprintPage = false;
  }

  resetPrivacyPage() {
    this.isPrivacyPage = false;
  }

  isMobile = window.innerWidth <= 375;

  @HostListener('window:resize', ['$event'])

  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 375;
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    const { nativeElement } = this.elRef;
    const header = nativeElement.querySelector('#header');
    const headerContainer = nativeElement.querySelector('#headerContainer');
    const body = document.body;

    if(this.isImprintPage == true || this.isPrivacyPage == true) {
      this.fixHeaderLegal(header, headerContainer, body);
    }
    if(this.isImprintPage == false && this.isPrivacyPage == false) {
      this.fixHeader(header, headerContainer, body);
    }
  }

  fixHeaderLegal(header: HTMLElement, headerContainer: HTMLElement, body: HTMLElement) {
    header.classList.add('fixedHeader');
    headerContainer.classList.add('fixedHeaderContainer')
    body.style.paddingTop = `100px`;
  }

  fixHeader(header: HTMLElement, headerContainer: HTMLElement, body: HTMLElement) {
    if (window.scrollY > window.innerHeight) {
      header.classList.add('fixedHeader');
      headerContainer.classList.add('fixedHeaderContainer')
      body.style.paddingTop = `100px`;
    } else {
      header.classList.remove('fixedHeader');
      headerContainer.classList.remove('fixedHeaderContainer')
      body.style.paddingTop = `0`;
    }
  }
  
  showPopup = false;
  
  onPopupTrigger() {
    this.showPopup = true;
  }
  
  closePopup() {
    this.showPopup = false;
  }
}