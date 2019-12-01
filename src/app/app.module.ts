import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/main/header/header.component';
import { ContentComponent } from './component/main/content/content.component';
import { FooterComponent } from './component/main/footer/footer.component';
import { CountdownModule } from 'ngx-countdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NominadosComponent } from './component/main/nominados/nominados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NominadosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CountdownModule ,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
