import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImprintTemplateService } from './imprint.template.service';
import { LanguageService } from '../language.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss', './imprint.component.responsive.scss']
})

export class ImprintComponent {
  language: 'english' | 'german' = 'english';

  constructor(
    public imprintTemplateService: ImprintTemplateService, 
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
