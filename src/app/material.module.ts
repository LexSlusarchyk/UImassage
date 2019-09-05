import {NgModule} from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatTreeModule,

} from '@angular/material';

import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatTabsModule,
        MatSnackBarModule,
        MatSortModule,
        MatDividerModule,
        MatCardModule,
        MatPaginatorModule,
        MatCardModule,
        MatDialogModule,
        MatSelectModule,
        MatSidenavModule,
        MatTreeModule
    ]
})
export class MaterialModule {
}
