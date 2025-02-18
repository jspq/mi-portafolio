import { Directive, HostListener, OnInit, OnDestroy, Renderer2 } from '@angular/core';

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
    // DOM elements
    private cursorDotElement: HTMLElement | undefined;
    private cursorRingElement: HTMLElement | undefined;

    // IDs for animation
    private animationFrameId: number | null = null;

    // Animation parameters
    private readonly smoothFactor = 0.3;

    // Target and current positions for animation
    private targetX = 0;
    private targetY = 0;
    private currentX = 0;
    private currentY = 0;

    // Cursor state
    private cursorState: CursorState = {
        x: 0,
        y: 0,
        isSelecting: false,
        isClicking: false,
        isPointer: false
    };

    constructor(private renderer: Renderer2) {
        this.createCursorElements();
    }

    ngOnInit(): void {
        this.startAnimation();
    }

    ngOnDestroy(): void {
        this.stopAnimation();
        this.removeCursorElements();
    }

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent): void {
        this.updateTargetPosition(e.clientX, e.clientY);
        this.updatePointerState(e.clientX, e.clientY);
    }

    @HostListener('document:mousedown')
    onMouseDown(): void {
        this.cursorState.isClicking = true;
        this.renderer.addClass(this.cursorDotElement, 'clicking');
    }

    @HostListener('document:mouseup')
    onMouseUp(): void {
        this.cursorState.isClicking = false;
        this.cursorState.isSelecting = false;
        this.renderer.removeClass(this.cursorDotElement, 'clicking');
    }

    @HostListener('document:selectstart')
    onSelectionStart(): void {
        this.cursorState.isSelecting = true;
        this.renderer.addClass(this.cursorDotElement, 'selecting');
    }

    private createCursorElements(): void {
        // Create cursor elements
        this.cursorRingElement = this.renderer.createElement('div');
        this.cursorDotElement = this.renderer.createElement('div');
        this.renderer.addClass(this.cursorRingElement, 'cursor-ring');
        this.renderer.addClass(this.cursorDotElement, 'cursor-dot');
        this.renderer.appendChild(document.body, this.cursorRingElement);
        this.renderer.appendChild(document.body, this.cursorDotElement);
    }

    private startAnimation(): void {
        if (!this.animationFrameId) {
            this.animate();
        }
    }

    private stopAnimation(): void {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    private removeCursorElements(): void {
        if (this.cursorRingElement?.parentNode) {
            this.renderer.removeChild(document.body, this.cursorRingElement);
        }
        if (this.cursorDotElement?.parentNode) {
            this.renderer.removeChild(document.body, this.cursorDotElement);
        }
    }

    private updateTargetPosition(x: number, y: number): void {
        this.targetX = x;
        this.targetY = y;
        this.cursorState.x = x;
        this.cursorState.y = y;
    }

    private updatePointerState(x: number, y: number): void {
        const element = document.elementFromPoint(x, y);
        const computedStyle = element ? window.getComputedStyle(element) : null;
        this.cursorState.isPointer = computedStyle?.cursor === 'pointer';
    }

    private animate(): void {
        this.interpolatePosition();
        this.applyTransforms();
        this.updateDotClasses();

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    private interpolatePosition(): void {
        const dx = this.targetX - this.currentX;
        const dy = this.targetY - this.currentY;
        this.currentX += dx * this.smoothFactor;
        this.currentY += dy * this.smoothFactor;
    }

    private applyTransforms(): void {
        const { dotScale, ringScale } = this.computeScales(this.cursorState);
        // Dot at the real mouse position
        const dotTransform = `translate3d(${this.cursorState.x}px, ${this.cursorState.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
        // Ring with smoothed position
        const ringTransform = `translate3d(${this.currentX}px, ${this.currentY}px, 0) translate(-50%, -50%) scale(${ringScale})`;

        this.renderer.setStyle(this.cursorDotElement, 'transform', dotTransform);
        this.renderer.setStyle(this.cursorRingElement, 'transform', ringTransform);
    }

    private updateDotClasses(): void {
        this.renderer.removeClass(this.cursorDotElement, 'pointer');
        this.renderer.removeClass(this.cursorDotElement, 'selecting');
        this.renderer.removeClass(this.cursorDotElement, 'clicking');

        if (this.cursorState.isClicking) {
            this.renderer.addClass(this.cursorDotElement, 'clicking');
        } else if (this.cursorState.isSelecting) {
            this.renderer.addClass(this.cursorDotElement, 'selecting');
        } else if (this.cursorState.isPointer) {
            this.renderer.addClass(this.cursorDotElement, 'pointer');
        }
    }

    private computeScales(state: CursorState): { dotScale: number; ringScale: number } {
        let dotScale = 1;
        let ringScale = 1;

        if (state.isClicking) {
            dotScale = 0.7;
            ringScale = 0.9;
        } else if (state.isSelecting) {
            dotScale = 2.5;
            ringScale = 1.5;
        } else if (state.isPointer) {
            dotScale = 2.6;
            ringScale = 1.2;
        }

        return { dotScale, ringScale };
    }
}
