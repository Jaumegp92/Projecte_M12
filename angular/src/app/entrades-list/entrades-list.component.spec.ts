import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradesListComponent } from './entrades-list.component';

describe('EntradesListComponent', () => {
  let component: EntradesListComponent;
  let fixture: ComponentFixture<EntradesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
