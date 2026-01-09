import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importation de tous tes composants
import { HomeComponent } from './home/home.component';
import { MethodologieComponent } from './methodologie/methodologie.component';
import { LeSelfComponent } from './le-self/le-self.component';
import { AlternativesComponent } from './alternatives/alternatives.component';
import { QualiteComponent } from './qualite/qualite.component';
import { ProfilsComponent } from './profils/profils.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { SyntheseComponent } from './synthese/synthese.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'methodologie', component: MethodologieComponent },
  { path: 'le-self', component: LeSelfComponent },
  { path: 'alternatives', component: AlternativesComponent },
  { path: 'qualite', component: QualiteComponent },
  { path: 'profils', component: ProfilsComponent },
  { path: 'interpretation', component: InterpretationComponent },
  { path: 'synthese', component: SyntheseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
