import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPortafolioComponent } from './mi-portafolio.component';

describe('MiPortafolioComponent', () => {
  let component: MiPortafolioComponent;
  let fixture: ComponentFixture<MiPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiPortafolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
