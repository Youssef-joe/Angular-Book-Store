import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit {
  @Input() animationClass: string = 'animate_fade'

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'animate__animated');
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          setTimeout(() => {
            this.renderer.removeClass(this.el.nativeElement, this.animationClass);
          }, 2000);
          // observer.unobserve(this.el.nativeElement) // optional
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    observer.observe(this.el.nativeElement);
  }

}
