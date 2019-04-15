import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKittensComponent } from './list-kittens.component';

describe('ListKittensComponent', () => {
  let component: ListKittensComponent;
  let fixture: ComponentFixture<ListKittensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKittensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKittensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
