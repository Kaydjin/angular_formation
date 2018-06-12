import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormulaireComponent } from './recipe-formulaire.component';

describe('RecipeFormulaireComponent', () => {
  let component: RecipeFormulaireComponent;
  let fixture: ComponentFixture<RecipeFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
