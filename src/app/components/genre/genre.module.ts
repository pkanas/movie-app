import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';

import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PipeModule } from 'src/app/pipes/pipe.module';



@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    GenreRoutingModule,
    PipeModule,
    SkeletonModule,
    MatPaginatorModule
  ]
})
export class GenreModule { }
