import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivacyTemplateService } from './privacy.template.service';
import { LanguageService } from '../language.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss', './privacy.component.responsive.scss']
})

export class PrivacyComponent {
  language: 'english' | 'german' = 'english';

  constructor(
    public privacyTemplateService: PrivacyTemplateService, 
    private route: ActivatedRoute, 
    private languageService: LanguageService,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const lang = params.get('language') as 'english' | 'german';
      if (lang) {
        this.language = lang;
        this.languageService.setLanguage(lang); 
      }
    });
    this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  navigateToHome() {
    this.router.navigate(['/top', this.language]).then(() => {
      window.scrollTo({ top: 1, behavior: 'smooth' }); 
      this.appComponent.resetImprintPage();
      this.appComponent.resetPrivacyPage();
    });
  }
}
