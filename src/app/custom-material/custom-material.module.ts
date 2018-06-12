import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule, 
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
