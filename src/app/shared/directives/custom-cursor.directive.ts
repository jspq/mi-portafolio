import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appCustomCursor]',
    standalone: false
})
export class CustomCursorDirective {
    private cursorDotElement: HTMLElement | undefined;
    private cursorRingElement: HTMLElement | undefined;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        this.cursorRingElement = document.createElement('div');
        this.cursorDotElement = document.createElement('div');
        this.cursorRingElement.className = 'cursor-ring';
        this.cursorDotElement.className = 'cursor-dot';
        document.body.appendChild(this.cursorRingElement);
        document.body.appendChild(this.cursorDotElement);
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        this.renderer.setStyle(this.cursorRingElement, 'left', `${e.clientX}px`);
        this.renderer.setStyle(this.cursorRingElement, 'top', `${e.clientY}px`);
        this.renderer.setStyle(this.cursorDotElement, 'left', `${e.clientX}px`);
        this.renderer.setStyle(this.cursorDotElement, 'top', `${e.clientY}px`);
    }
}
