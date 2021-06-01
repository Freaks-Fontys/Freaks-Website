import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostlistComponent } from './components/postlist/postlist.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateDialogBoxComponent } from './components/create-dialog-box/create-dialog-box.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeftnavComponent } from './components/leftnav/leftnav.component';
import { MaterialModule } from './material/material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    HomeComponent,
    CreateDialogBoxComponent,
    LeftnavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
