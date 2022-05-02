import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaListComponent } from './entrada-list.component';

describe('EntradaListComponent', () => {
  let component: EntradaListComponent;
  let fixture: ComponentFixture<EntradaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
