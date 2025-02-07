import { Directive, ElementRef, HostListener, Renderer2, signal } from '@angular/core';

@Directive({
    selector: '[appCustomCursor]',
    standalone: false
})
export class CustomCursorDirective {
    private cursorDotElement: HTMLElement | undefined;
    private cursorRingElement: HTMLElement | undefined;
    private animationFrameId: number | null = null;
    private readonly smoothFactor = 0.13;

    private targetX = 0;
    private targetY = 0;
    private currentX = 0;
    private currentY = 0;

    dotPosition = signal({ x: 0, y: 0 });

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

        this.targetX = e.clientX;
        this.targetY = e.clientY;

        if (!this.animationFrameId) {
            this.animate();
        }
    }

    private animate() {
        const dx = this.targetX - this.currentX;
        const dy = this.targetY - this.currentY;

        this.currentX += dx * this.smoothFactor;
        this.currentY += dy * this.smoothFactor;

        this.dotPosition.set({
            x: this.currentX,
            y: this.currentY
        });

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    ngOnDestroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
}
