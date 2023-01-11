import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { WorkComponent } from './work/work.component';
import { AcreditationsComponent } from './acreditations/acreditations.component';
import { AcreditationServicio } from './acreditations/acreditations.servicio';
import { WorkServicio } from './work/work.servicio';
import { SkillsComponent } from './skills/skills.component';
import { SkillServicios } from './skills/skills.servicio';
import { LearningComponent } from './learning/learning.component';
import { WorkedComponent } from './worked/worked.component';
import { LearningServicios } from './learning/learning.servicio';
import { WorkedServicios } from './worked/worked.servicio';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoServicios } from './proyectos/proyecto.servicio';
import { ContactoComponent } from './contacto/contacto.component';
import { PersonaServicio } from './persona.servicio';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

import { NgParticlesModule } from 'ng-particles';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    WhoAmIComponent,
    WorkComponent,
    AcreditationsComponent,
    SkillsComponent,
    LearningComponent,
    WorkedComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
  ],
  providers: [
    AcreditationServicio,
    WorkServicio,
    SkillServicios,
    LearningServicios,
    WorkedServicios,
    ProyectoServicios,
    PersonaServicio,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgParticlesModule, HttpClientModule,]
})
export class AppModule {}
