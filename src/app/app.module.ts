import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MethodologieComponent } from './methodologie/methodologie.component';
import { LeSelfComponent } from './le-self/le-self.component';
import { AlternativesComponent } from './alternatives/alternatives.component';
import { QualiteComponent } from './qualite/qualite.component';
import { ProfilsComponent } from './profils/profils.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { SyntheseComponent } from './synthese/synthese.component';
import { HeaderComponent } from './header/header.component';
import { FooterGenericComponent } from 'src/shared/footer-generic/footer-generic.component';
import { HeaderGenericComponent } from 'src/shared/header-generic/header-generic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MethodologieComponent,
    LeSelfComponent,
    AlternativesComponent,
    QualiteComponent,
    ProfilsComponent,
    InterpretationComponent,
    SyntheseComponent,
    HeaderComponent,
    FooterGenericComponent,
    HeaderGenericComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
