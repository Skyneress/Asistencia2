import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsigAsisPage } from './asig-asis.page';

describe('AsigAsisPage', () => {
  let component: AsigAsisPage;
  let fixture: ComponentFixture<AsigAsisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsigAsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
