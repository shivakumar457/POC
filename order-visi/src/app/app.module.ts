import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from "@clr/angular";

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

import { MatMenuModule,MatIconModule, MatCardModule, MatButtonToggleModule, MatTabsModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatAutocompleteModule, MatCheckboxModule, MatSidenavModule, MatTableModule, MatSortModule,MatSelectModule} from '@angular/material';
import { HttpClientModule}  from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import {ListboxModule } from 'primeng/listbox'
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import {MatChipsModule} from '@angular/material/chips';
const appRoutes: Routes = [
  { path: 'landing',      component: LandingComponent},
   { path: '',
    redirectTo: '/landing',
     pathMatch: 'full'
   }
 ];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
       ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ClarityModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule, 
    MatSortModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    HttpModule,
    MatTableModule,
    MatAutocompleteModule,
    MatChipsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
     ListboxModule, RadioButtonModule, DropdownModule
  ],
 // providers: [ GridDataService ],
  bootstrap: [AppComponent]
})
export class AppModule {}


