import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AboutMeTemplateService } from './about-me.template.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IntersectionObserverDirective } from '../intersection-observer.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', './about-me.component.responsive.scss'],
  animations: [
    trigger('fadeIn', [
      state('hidden', style({ opacity: 0, transform: 'translateY(50%)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [
        animate('500ms ease-out')
      ])
    ])
  ]
})

export class AboutMeComponent {
  isVisible = false;
  
  onIntersection(isIntersecting: boolean) {
    this.isVisible = isIntersecting;
  }

  @Input() language: 'english' | 'german' = 'english';

  constructor(public aboutMeTemplateService: AboutMeTemplateService) {}
}
