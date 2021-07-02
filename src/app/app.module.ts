import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ModalWindComponent } from './modal-wind/modal-wind.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { ShatlComponent } from './shatl/shatl.component';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { CarsComponent } from './cars/cars.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const appRoutes: Routes=[
{path:'car', component:CarsComponent},
{path:'raketa', component:InstrumentsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ModalWindComponent,
    InstrumentsComponent,
    ShatlComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatInputModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

