import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatThumbComponent } from './cat-thumb.component';

describe('CatThumbComponent', () => {
  let component: CatThumbComponent;
  let fixture: ComponentFixture<CatThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
