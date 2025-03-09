import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TopComponent } from './top/top.component'; 
import { HeaderComponent } from './header/header.component'; 
import { AboutMeComponent } from './about-me/about-me.component'; 
import { SkillsComponent } from './skills/skills.component'; 
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'; 
import { ImprintComponent } from './imprint/imprint.component'; 
import { PrivacyComponent } from './privacy/privacy.component'; 

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
  constructor(private router: Router) {}

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

  isMobile = window.innerWidth <= 375;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth <= 375;
  }
}