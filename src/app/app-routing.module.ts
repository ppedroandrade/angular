import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './layout/index/index.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { CarrosListComponent } from './carros/carros-list/carros-list.component';
import { CarrosDetailsComponent } from './carros/carros-details/carros-details.component';
import { LivrosListComponent } from './livros/livros-list/livros-list.component';
import { LivrosDetailsComponent } from './livros/livros-details/livros-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: IndexComponent,
    children: [
      { path: 'pessoas', component: PessoaslistComponent },
      { path: 'pessoas/novo', component: PessoasdetailsComponent },
      { path: 'pessoas/editar/:id', component: PessoasdetailsComponent },
      { path: 'carros', component: CarrosListComponent },
      { path: 'carros/novo', component: CarrosDetailsComponent },
      { path: 'pessoas/editar/:id', component: CarrosDetailsComponent },
      { path: 'livros', component: LivrosListComponent },
      { path: 'livros/novo', component: LivrosDetailsComponent },
      { path: 'livros/editar/:id', component: LivrosDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
