import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CablePickerComponent } from './cables/cable-picker/cable-picker.component';
import { CableListComponent } from './cables/cable-list/cable-list.component';
import { CableViewerComponent} from './cables/cable-picker/cable-viewer/cable-viewer.component';
import { CableSelectionComponent } from './cables/cable-picker/cable-selection/cable-selection.component';

import { EndGenderPipe } from './shared/end-gender.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CablePickerComponent,
    CableListComponent,
    CableViewerComponent,
    CableSelectionComponent,
    EndGenderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
