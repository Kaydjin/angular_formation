import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormulaireUpdateComponent } from './recipe-formulaire-update.component';

describe('RecipeFormulaireUpdateComponent', () => {
  let component: RecipeFormulaireUpdateComponent;
  let fixture: ComponentFixture<RecipeFormulaireUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFormulaireUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormulaireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
