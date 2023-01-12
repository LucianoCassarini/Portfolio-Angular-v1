import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './acreditations/editeducacion.component';
import { NeweducacionComponent } from './acreditations/neweducacion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditExperienciaComponent } from './work/edit-experiencia.component';
import { NewExperienciaComponent } from './work/new-experiencia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
