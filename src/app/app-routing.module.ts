import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'house-info', loadChildren: './house-info/house-info.module#HouseInfoPageModule' },
  { path: 'ensinar', loadChildren: './ensinar/ensinar.module#EnsinarPageModule' },
  { path: 'aprender', loadChildren: './aprender/aprender.module#AprenderPageModule' },
  { path: 'cadastro-aluno', loadChildren: './cadastro-aluno/cadastro-aluno.module#CadastroAlunoPageModule' },
  { path: 'ilap', loadChildren: './ilap/ilap.module#ILapPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
