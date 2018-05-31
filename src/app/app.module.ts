import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CablePickerComponent } from './cables/cable-picker/cable-picker.component';
import { CableListComponent } from './cables/cable-list/cable-list.component';
import { CableViewerComponent} from './cables/cable-picker/cable-viewer/cable-viewer.component';
import { CableSelectionComponent } from './cables/cable-picker/cable-selection/cable-selection.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

import { EndGenderPipe } from './shared/end-gender.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CablePickerComponent,
    CableListComponent,
    CableViewerComponent,
    CableSelectionComponent,
    HomeComponent,
    PageNotFoundComponent
    EndGenderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'cables', component: CablePickerComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
