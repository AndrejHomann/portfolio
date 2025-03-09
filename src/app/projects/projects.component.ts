import { Component, ViewChild, ElementRef, Input, HostListener, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsTemplateService } from './projects.template.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IntersectionObserverDirective } from '../intersection-observer.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './projects.component.responsive.scss'],
  animations: [
      trigger('flip', [
        state('unflipped', style({ transform: 'rotateY(180deg)' })),
        state('flipped', style({ transform: 'rotateY(0deg)' })),
        transition('flipped => unflipped', [animate('1s ease-in-out')]),
        transition('unflipped => flipped', [animate('1s ease-in-out')]),
      ]),
      trigger('lightSpeed', [
        state('hidden', style({ transform: 'translateX(+100%)' })),
        state('visible', style({ transform: 'translateX(0)' })),
        transition('hidden => visible', [animate('1s ease-in-out')]),
      ]),
      trigger('flipIn', [
        state('start', style({ transform: 'rotateY(180deg)' })),
        state('end', style({ transform: 'rotateY(0)' })),
        transition('start => end', [animate('1s ease-out')]),
      ])
    ]
})

export class ProjectsComponent {
  isVisible = false;
  onIntersection(isIntersecting: boolean) {
    this.isVisible = isIntersecting;
  }

  @Input() language: 'english' | 'german' = 'english';
  innerWidth: number = window.innerWidth;
  constructor(private elRef: ElementRef, public projectsTemplateService: ProjectsTemplateService) {}
  joinVisible = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    this.updateJoinVisibility();
    this.updateEplVisibility(); 
  }

  ngOnInit() {
    this.updateJoinVisibility();
    this.updateEplVisibility(); 
  }

  updateJoinVisibility() {
    const join = this.elRef.nativeElement.querySelector('#joinContainer') as HTMLElement;
    const joinMobile = this.elRef.nativeElement.querySelector('#joinContainerMobile') as HTMLElement;
    if (this.joinVisible === true && this.innerWidth > 830) {
        join.style.display = "flex";
        joinMobile.style.display = "none";
    }
    if (this.joinVisible === true && this.innerWidth <= 830) {
        join.style.display = "none";
        joinMobile.style.display = "flex";
    }
  }

  updateEplVisibility() {
    const epl = this.elRef.nativeElement.querySelector('#eplContainer') as HTMLElement;
    const eplMobile = this.elRef.nativeElement.querySelector('#eplContainerMobile') as HTMLElement;
    if (this.joinVisible === false && this.innerWidth > 830) {
        epl.style.display = "flex";
        eplMobile.style.display = "none";
    }
    if (this.joinVisible === false && this.innerWidth <= 830) {
        epl.style.display = "none";
        eplMobile.style.display = "flex";
    }
  }

  showJoin() {
    if (this.joinVisible) return;
    const { nativeElement } = this.elRef;
    const isDesktop = this.innerWidth > 830;
    const elements = {
        join: nativeElement.querySelector('#joinContainer'),
        joinMobile: nativeElement.querySelector('#joinContainerMobile'),
        epl: nativeElement.querySelector('#eplContainer'),
        eplMobile: nativeElement.querySelector('#eplContainerMobile'),
        joinTab: nativeElement.querySelector('#joinTabNameContainer'),
        eplTab: nativeElement.querySelector('#eplTabNameContainer')
    };
    (isDesktop ? elements.join : elements.joinMobile).style.display = "flex";
    (isDesktop ? elements.epl : elements.eplMobile).style.display = "none";
    elements.joinTab.classList.replace('unmark', 'mark');
    elements.eplTab.classList.replace('mark', 'unmark');
    this.joinVisible = true;
  }

  showEpl() {
    const { nativeElement } = this.elRef;
    const isDesktop = this.innerWidth > 830;
    const elements = {
        join: nativeElement.querySelector('#joinContainer'),
        joinMobile: nativeElement.querySelector('#joinContainerMobile'),
        epl: nativeElement.querySelector('#eplContainer'),
        eplMobile: nativeElement.querySelector('#eplContainerMobile'),
        joinTab: nativeElement.querySelector('#joinTabNameContainer'),
        eplTab: nativeElement.querySelector('#eplTabNameContainer')
    };
    if (!this.joinVisible) return;
    (isDesktop ? elements.epl : elements.eplMobile).style.display = "flex";
    (isDesktop ? elements.join : elements.joinMobile).style.display = "none";
    elements.joinTab.classList.replace('mark', 'unmark');
    elements.eplTab.classList.replace('unmark', 'mark');
    this.joinVisible = false;
  }
}