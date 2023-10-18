import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoAsigPage } from './info-asig.page';

describe('InfoAsigPage', () => {
  let component: InfoAsigPage;
  let fixture: ComponentFixture<InfoAsigPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoAsigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
