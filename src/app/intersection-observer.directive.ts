import { Directive, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements AfterViewInit {
  @Output() intersecting = new EventEmitter<boolean>(); 

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => this.intersecting.emit(entry.isIntersecting), 
      { threshold: 0.01 } // Trigger bei X % Sichtbarkeit
    );
    this.observer.observe(this.el.nativeElement);
  }
}

