import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Nominados2018Component } from './nominados2018/nominados2018.component';
import { Nominados2019Component } from './nominados2019/nominados2019.component';


const router: Routes = [
  { path: '2018' , component: Nominados2018Component },
  { path: '2019' , component: Nominados2019Component }
];


@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
