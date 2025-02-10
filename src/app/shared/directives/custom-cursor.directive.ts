import { Directive, HostListener, OnInit, Renderer2, OnDestroy } from '@angular/core';

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
export class CustomCursorDirective implements OnInit, OnDestroy {
    private cursorDotElement: HTMLElement;
    private cursorRingElement: HTMLElement;
    private animationFrameId: number | null = null;
    private readonly smoothFactor = 0.15;
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

    constructor(private renderer: Renderer2) {
        // Crear elementos del cursor
        this.cursorRingElement = document.createElement('div');
        this.cursorDotElement = document.createElement('div');
        this.renderer.addClass(this.cursorRingElement, 'cursor-ring');
        this.renderer.addClass(this.cursorDotElement, 'cursor-dot');
        document.body.appendChild(this.cursorRingElement);
        document.body.appendChild(this.cursorDotElement);
    }

    ngOnInit(): void {
        this.animate();
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent): void {
        this.targetX = e.clientX;
        this.targetY = e.clientY;
        // Actualiza el estado de posición y cursor
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

    @HostListener('document:mousedown')
    onMouseDown(): void {
        this.cursorState = { ...this.cursorState, isClicking: true };
    }

    @HostListener('document:mouseup')
    onMouseUp(): void {
        this.cursorState = { ...this.cursorState, isClicking: false, isSelecting: false };
    }

    @HostListener('document:selectstart')
    onSelectionStart(): void {
        this.cursorState = { ...this.cursorState, isSelecting: true };
    }

    private animate(): void {
        const dx = this.targetX - this.currentX;
        const dy = this.targetY - this.currentY;
        this.currentX += dx * this.smoothFactor;
        this.currentY += dy * this.smoothFactor;

        // Calcula la escala del dot y ring según el estado (prioridad: clicking > selecting > pointer > default)
        let dotScale = 1;
        let ringScale = 1;
        if (this.cursorState.isClicking) {
            dotScale = 0.7;
            ringScale = 0.9;
        } else if (this.cursorState.isSelecting) {
            dotScale = 2.5;
            ringScale = 1.5;
        } else if (this.cursorState.isPointer) {
            dotScale = 1.5;
            ringScale = 1.2;
        }

        // Calcula las transformaciones combinando la posición y la escala,
        // usando translate3d para la posición y translate(-50%, -50%) para centrar.
        const dotTransform = `translate3d(${this.currentX}px, ${this.currentY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
        const ringTransform = `translate3d(${this.cursorState.x}px, ${this.cursorState.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;

        this.renderer.setStyle(this.cursorDotElement, 'transform', dotTransform);
        this.renderer.setStyle(this.cursorRingElement, 'transform', ringTransform);

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    ngOnDestroy(): void {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        if (this.cursorRingElement.parentNode) {
            this.cursorRingElement.parentNode.removeChild(this.cursorRingElement);
        }
        if (this.cursorDotElement.parentNode) {
            this.cursorDotElement.parentNode.removeChild(this.cursorDotElement);
        }
    }
}
