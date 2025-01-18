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

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
  }
}
