import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdupdataComponent } from './prdupdata.component';

describe('PrdupdataComponent', () => {
  let component: PrdupdataComponent;
  let fixture: ComponentFixture<PrdupdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdupdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdupdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
