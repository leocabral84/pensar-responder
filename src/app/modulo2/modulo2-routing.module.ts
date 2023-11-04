// src/app/modulo2/modulo2-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {
    path: 'child2',
    component: Child2Component
  }
  // Você pode adicionar mais rotas filhas aqui conforme necessário
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }