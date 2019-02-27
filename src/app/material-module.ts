import {NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatChipsModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatChipsModule,
  ]
})

export class MaterialModule {}
