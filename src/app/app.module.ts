import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CablePickerComponent } from './cables/cable-picker/cable-picker.component';
import { CableListComponent } from './cables/cable-list/cable-list.component';
import { CableViewerComponent} from './cables/cable-picker/cable-viewer/cable-viewer.component';
import { CableSelectionComponent } from './cables/cable-picker/cable-selection/cable-selection.component';
import { CableDetailComponent } from './cables/cable-detail/cable-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

import { EndGenderPipe } from './shared/end-gender.pipe';
import { EndListDisplayPipe } from './shared/end-list-display.pipe';
import { EndQuantityPipe } from './shared/end-quantity.pipe';

import { CableGuardService } from './cables/cable-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CablePickerComponent,
    CableListComponent,
    CableViewerComponent,
    CableSelectionComponent,
    CableDetailComponent,
    HomeComponent,
    PageNotFoundComponent,
    EndGenderPipe,
    EndListDisplayPipe,
    EndQuantityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'cables', component: CablePickerComponent },
      { path: 'cables/:itemNumber', canActivate: [CableGuardService], component: CableDetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [CableGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
