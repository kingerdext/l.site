import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AlgebreComponent } from './algebre/algebre.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { Physique1Component } from './physique1/physique1.component';
import { Physique2Component } from './physique2/physique2.component';
import { SIComponent } from './si/si.component';
import { ElectroniqueComponent } from './electronique/electronique.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { TECComponent } from './tec/tec.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'algebre', component: AlgebreComponent},
  { path: 'analyse', component: AnalyseComponent},
  { path: 'physique1', component: Physique1Component },
  { path: 'physique2', component: Physique2Component},
  { path: 'si', component: SIComponent},
  { path: 'electronique', component: ElectroniqueComponent},
  { path: 'informatique', component: InformatiqueComponent},
  { path: 'tec', component: TECComponent},
  { path: 'contact', component: ContactComponent}



]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
