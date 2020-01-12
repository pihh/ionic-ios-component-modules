import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PihhIonicComponentsComponent } from './pihh-ionic-components.component';

describe('PihhIonicComponentsComponent', () => {
  let component: PihhIonicComponentsComponent;
  let fixture: ComponentFixture<PihhIonicComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PihhIonicComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PihhIonicComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
