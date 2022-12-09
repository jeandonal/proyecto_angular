import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppStudentsComponent } from './app-students/app-students.component';
import { AppInterpolacionComponent } from './app-interpolacion/app-interpolacion.component';
import { DirectivaJona1Directive } from './directiva-jona1.directive';
import { MisPIPEsPipe } from './mis-pipes.pipe';
import { AppSegundaEntregaComponent } from './app-segunda-entrega/app-segunda-entrega.component';
import { TerceraEntregaComponent } from './tercera-entrega/tercera-entrega.component';
import { PageWrapperComponent } from './terceraEntrega/page-wrapper/page-wrapper.component';
import { SidebarComponent } from './terceraEntrega/sidebar/sidebar.component';
import { TopbarComponent } from './terceraEntrega/topbar/topbar.component';
import { AyudaAErroresComponent } from './terceraEntrega/shared/ayuda-a-errores/ayuda-a-errores.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppNavbarComponent,
    AppStudentsComponent,
    AppInterpolacionComponent,
    DirectivaJona1Directive,
    MisPIPEsPipe,
    AppSegundaEntregaComponent,
    TerceraEntregaComponent,
    PageWrapperComponent,
    SidebarComponent,
    TopbarComponent,
    AyudaAErroresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
