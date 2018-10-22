import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatDividerModule,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

export const TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};
@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    // MatNativeDateModule,
    MatMomentDateModule,
  ],
  declarations: [],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS }
  ]
})
export class MaterialSharedModule { }
