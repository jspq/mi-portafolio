import { Directive, ElementRef, HostListener, OnInit, Renderer2, signal } from '@angular/core';

interface CursorState {
    x: number;
    y: number;
    isSelecting: boolean;
    isClicking: boolean;
    isPointer: boolean;
}

@Directive({
    selector: '[appCustomCursor]',
    standalone: false
})
export class CustomCursorDirective implements OnInit {
    private cursorDotElement: HTMLElement;
    private cursorRingElement: HTMLElement;
    private animationFrameId: number | null = null;
    private readonly smoothFactor = 0.13;

    private targetX = 0;
    private targetY = 0;
    private currentX = 0;
    private currentY = 0;

    private cursorState: CursorState = {
        x: 0,
        y: 0,
        isSelecting: false,
        isClicking: false,
        isPointer: false
    };

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

    ngOnInit(): void {
        this.animate();
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        this.targetX = e.clientX;
        this.targetY = e.clientY;

        const element = document.elementFromPoint(e.clientX, e.clientY);
        const computedStyle = element ? window.getComputedStyle(element) : null;
        const isPointer = computedStyle?.cursor === 'pointer';

        this.cursorState = {
            ...this.cursorState,
            x: e.clientX,
            y: e.clientY,
            isPointer
        };
    }

    @HostListener('document:mousedown', ['$event'])
    onMouseDown(e: MouseEvent) {
        this.cursorState = { ...this.cursorState, isClicking: true };
    }

    @HostListener('document:mouseup', ['$event'])
    onMouseUp() {
        this.cursorState = { ...this.cursorState, isClicking: false, isSelecting: false };
    }

    @HostListener('document:selectstart', ['$event'])
    onSelectionStart() {
        this.cursorState = { ...this.cursorState, isSelecting: true };
    }

    private animate() {
        const dx = this.targetX - this.currentX;
        const dy = this.targetY - this.currentY;
        this.currentX += dx * this.smoothFactor;
        this.currentY += dy * this.smoothFactor;

        this.renderer.setStyle(this.cursorRingElement, 'left', `${this.cursorState.x}px`);
        this.renderer.setStyle(this.cursorRingElement, 'top', `${this.cursorState.y}px`);
        this.renderer.setStyle(this.cursorDotElement, 'left', `${this.currentX}px`);
        this.renderer.setStyle(this.cursorDotElement, 'top', `${this.currentY}px`);

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    ngOnDestroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        this.renderer.removeChild(document.body, this.cursorRingElement);
        this.renderer.removeChild(document.body, this.cursorDotElement);
    }
}
