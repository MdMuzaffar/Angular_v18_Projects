import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAppComponent } from './emp-app.component';

describe('EmpAppComponent', () => {
  let component: EmpAppComponent;
  let fixture: ComponentFixture<EmpAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
