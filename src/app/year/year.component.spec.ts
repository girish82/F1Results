import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearComponent } from './year.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('YearComponent', () => {
  let component: YearComponent;
  let fixture: ComponentFixture<YearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearComponent ],
      imports: [RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
