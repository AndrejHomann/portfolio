import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { FooterTemplateService } from './footer.template.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IntersectionObserverDirective } from '../intersection-observer.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer.component.responsive.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateX(+80%)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', [
        animate('500ms ease-out')
      ])
    ])
  ]
})

export class FooterComponent {
  isVisible = false;
  onIntersection(isIntersecting: boolean) {
    this.isVisible = isIntersecting;
  }

  @Input() language: 'english' | 'german' = 'english';

  constructor(private router: Router, public footerTemplateService: FooterTemplateService) {}

  public isImprintPage = false;
  @Output() imprintClicked = new EventEmitter<boolean>();
  showImprintPage(event: Event): void {
    event.preventDefault();  
    this.imprintClicked.emit(true);  
    this.isImprintPage = true;
    this.router.navigate(['/imprint', this.language]).then(() => {
      window.scrollTo({ top: 0 });
    });
  }
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
}
