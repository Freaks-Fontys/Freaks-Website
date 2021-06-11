import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';

// tslint:disable-next-line: typedef
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    HomeComponent,
    CreateDialogBoxComponent,
    LeftnavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    InfiniteScrollModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost', 'api.freaks.nl', 'freaks.nl']
      },
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, Location,
     {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
