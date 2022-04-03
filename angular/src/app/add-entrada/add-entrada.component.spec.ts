import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntradaComponent } from './add-entrada.component';

describe('AddEntradaComponent', () => {
  let component: AddEntradaComponent;
  let fixture: ComponentFixture<AddEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
