import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatesPage } from './updates.page';

describe('UpdatesPage', () => {
  let component: UpdatesPage;
  let fixture: ComponentFixture<UpdatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
