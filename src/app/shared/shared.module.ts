import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCursorDirective } from './directives/custom-cursor.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [CustomCursorDirective],
    exports: [CustomCursorDirective, CommonModule]
})
export class SharedModule {}
