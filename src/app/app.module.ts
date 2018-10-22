import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialSharedModule } from './material-shared.module';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { ListsService } from './lists.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialSharedModule,
    AppRoutingModule
  ],
  providers: [
    ListsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
