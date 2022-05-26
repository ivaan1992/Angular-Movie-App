import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table/table.component';
import { FilterPipe } from './pipe/filter.pipe';



@NgModule({
  declarations: [
    TableComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    TableComponent,
  ]

})
export class MaterialsModule { }
