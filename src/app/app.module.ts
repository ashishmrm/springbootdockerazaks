import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { CricBuzzService } from './service/cricbuzz.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CriccBuzzInterceptor } from './cricbuzz.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TeamdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CricBuzzService, HttpClient,,
    {provide: HTTP_INTERCEPTORS, useClass: CriccBuzzInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
