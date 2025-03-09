import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SkillsTemplateService } from './skills.template.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IntersectionObserverDirective } from '../intersection-observer.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills.component.responsive.scss'],
  animations: [
    trigger('scale', [
      state('small', style({ transform: 'scale(0)' })),
      state('large', style({ transform: 'scale(1)' })),
      transition('small => large', [animate('500ms ease-in')]),
      transition('large => small', [animate('500ms ease-out')]),
    ])
  ]
})

export class SkillsComponent {
  isVisible = false;
  onIntersection(isIntersecting: boolean) {
    this.isVisible = isIntersecting;
  }

  @Input() language: 'english' | 'german' = 'english';
   constructor(public skillsTemplateService: SkillsTemplateService) {}
}
