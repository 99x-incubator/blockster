import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockeesComponent } from './blockees.component';

describe('BlockeesComponent', () => {
  let component: BlockeesComponent;
  let fixture: ComponentFixture<BlockeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
