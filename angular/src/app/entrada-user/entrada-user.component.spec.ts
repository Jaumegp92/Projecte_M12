import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaUserComponent } from './entrada-user.component';

describe('EntradaUserComponent', () => {
  let component: EntradaUserComponent;
  let fixture: ComponentFixture<EntradaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
