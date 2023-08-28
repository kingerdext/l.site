import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AlgebreComponent } from './algebre/algebre.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { Physique1Component } from './physique1/physique1.component';
import { Physique2Component } from './physique2/physique2.component';
import { SIComponent } from './si/si.component';
import { ElectroniqueComponent } from './electronique/electronique.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { TECComponent } from './tec/tec.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AlgebreComponent,
    AnalyseComponent,
    Physique1Component,
    Physique2Component,
    SIComponent,
    ElectroniqueComponent,
    InformatiqueComponent,
    TECComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
