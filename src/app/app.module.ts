// app.module.ts - módulo pai
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// rotas do módulo pai
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  // carrega o módulo filho em /modulo1
  { path: 'modulo1', loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1Module) }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // usa forRoot para criar rotas no módulo pai
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }