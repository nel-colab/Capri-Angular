import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './component/main/content/content.component';
import { NominadosComponent } from './component/main/nominados/nominados.component';

const router: Routes = [
  

  { path: 'home', component: ContentComponent },
  { path: 'nominados', component: NominadosComponent },
  { path: '', component: ContentComponent },
  { path: '**', component: ContentComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
