import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.css'
})
export class CustomCursorComponent {
  cursorX: number = 0;
  cursorY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX - 10;
    this.cursorY = e.clientY - 10;
  }

}
