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
import { Nominados2018Component } from './component/main/nominados2018/nominados2018.component';
import { Nominados2019Component } from './component/main/nominados2019/nominados2019.component';
import { MenuComponent } from './component/main/menu/menu.component';
import {MatListModule} from '@angular/material/list';
import { GaleriaComponent } from './component/main/galeria/galeria.component';
import { SocialesComponent } from './component/main/sociales/sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NominadosComponent,
    Nominados2018Component,
    Nominados2019Component,
    MenuComponent,
    GaleriaComponent,
    SocialesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CountdownModule ,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
