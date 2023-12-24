import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcWidgetComponent } from './cc-widget.component';

describe('CcWidgetComponent', () => {
  let component: CcWidgetComponent;
  let fixture: ComponentFixture<CcWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcWidgetComponent]
    });
    fixture = TestBed.createComponent(CcWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
