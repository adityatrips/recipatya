import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieInstructionComponent } from './recipie-instruction.component';

describe('RecipieInstructionComponent', () => {
  let component: RecipieInstructionComponent;
  let fixture: ComponentFixture<RecipieInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipieInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipieInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
