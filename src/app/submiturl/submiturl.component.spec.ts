import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmiturlComponent } from './submiturl.component';

describe('SubmiturlComponent', () => {
  let component: SubmiturlComponent;
  let fixture: ComponentFixture<SubmiturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmiturlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmiturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
