import { effect, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private isDarkTheme = signal<boolean>(this.getInitialTheme());

    public isDarkTheme$ = this.isDarkTheme.asReadonly();

    constructor() {
        // Effect to persist the theme
        effect(() => {
            this.updateTheme(this.isDarkTheme());
        });
    }

    private getInitialTheme(): boolean {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    private updateTheme(isDark: boolean): void {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    toggleTheme(): void {
        this.isDarkTheme.update((dark) => !dark);
    }
}
