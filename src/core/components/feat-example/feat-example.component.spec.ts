import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatExampleComponent } from './feat-example.component';

describe('FeatExampleComponent', () => {
  let component: FeatExampleComponent;
  let fixture: ComponentFixture<FeatExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
