import { Component, HostListener, ChangeDetectionStrategy, signal, OnDestroy } from '@angular/core';

interface CursorState {
    x: number;
    y: number;
    isSelecting: boolean;
    isClicking: boolean;
    isPointer: boolean;
}

@Component({
    selector: 'app-custom-cursor',
    standalone: true,
    templateUrl: './custom-cursor.component.html',
    styleUrl: './custom-cursor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCursorComponent implements OnDestroy {
    private animationFrameId: number | null = null;
    private readonly smoothFactor = 0.13;

    private targetX = 0;
    private targetY = 0;
    private currentX = 0;
    private currentY = 0;

    dotPosition = signal({ x: 0, y: 0 });

    cursorState = signal<CursorState>({
        x: 0,
        y: 0,
        isSelecting: false,
        isClicking: false,
        isPointer: false
    });

    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        const computedStyle = element ? window.getComputedStyle(element) : null;
        const isPointer = computedStyle?.cursor === 'pointer';

        this.targetX = e.clientX;
        this.targetY = e.clientY;

        this.cursorState.update((state) => ({
            ...state,
            x: e.clientX,
            y: e.clientY,
            isPointer
        }));

        if (!this.animationFrameId) {
            this.animate();
        }
    }

    @HostListener('document:mousedown', ['$event'])
    onMouseDown(e: MouseEvent) {
        this.cursorState.update((state) => ({
            ...state,
            isClicking: true
        }));
    }

    @HostListener('document:mouseup', ['$event'])
    onMouseUp() {
        this.cursorState.update((state) => ({
            ...state,
            isClicking: false,
            isSelecting: false
        }));
    }

    @HostListener('document:selectstart', ['$event'])
    onSelectionStart() {
        this.cursorState.update((state) => ({
            ...state,
            isSelecting: true
        }));
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
