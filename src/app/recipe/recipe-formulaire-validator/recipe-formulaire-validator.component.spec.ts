import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormulaireValidatorComponent } from './recipe-formulaire-validator.component';

describe('RecipeFormulaireValidatorComponent', () => {
  let component: RecipeFormulaireValidatorComponent;
  let fixture: ComponentFixture<RecipeFormulaireValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFormulaireValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormulaireValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
