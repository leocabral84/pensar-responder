// src/app/modulo2/modulo2.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modulo2RoutingModule } from './modulo2-routing.module';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    Child2Component
    // Inclua quaisquer outros componentes que pertençam a este módulo
  ],
  imports: [
    CommonModule,
    Modulo2RoutingModule
  ]
})
export class Modulo2Module { }