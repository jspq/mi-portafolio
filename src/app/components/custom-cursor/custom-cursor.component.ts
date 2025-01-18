import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCursorComponent {
  cursorX: number = 0;
  cursorY: number = 0;
  isClicking: boolean = false;
  isMoving: boolean = false;
  moveTimeout: any;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;

    this.isMoving = true;
    clearTimeout(this.moveTimeout);
    this.moveTimeout = setTimeout(() => {
      this.isMoving = false;
    }, 100);
  }

  @HostListener('document:mousedown')
  onMouseDown() {
    this.isClicking = true;
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isClicking = false;
  }
}
