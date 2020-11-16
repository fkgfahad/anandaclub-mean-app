import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatIconModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSelectModule,
  MatMenuModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule
  ],
  declarations: []
})

export class MaterialsModule { }
