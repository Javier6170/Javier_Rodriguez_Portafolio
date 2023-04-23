import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { NgParticlesModule } from "ng-particles";
import { FullpageComponent } from './components/fullpage/fullpage.component';
import { FormsModule } from '@angular/forms';
import { TimeLineEducationComponent } from './components/time-line-education/time-line-education.component';
import { HabilidadesTecnicasComponent } from './components/habilidades-tecnicas/habilidades-tecnicas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AcercaDeMiComponent,
    FullpageComponent,
    TimeLineEducationComponent,
    HabilidadesTecnicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
