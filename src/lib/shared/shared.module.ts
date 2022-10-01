import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component'
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    MatDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],

  exports: [
    MatDialogComponent,
  ],

})
export class SharedModule { }
