import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { LoginComponent } from './sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LivrosListComponent } from './livros/livros-list/livros-list.component';
import { CarrosDetailsComponent } from './carros/carros-details/carros-details.component';
import { LivrosDetailsComponent } from './livros/livros-details/livros-details.component';
import { CarrosListComponent } from './carros/carros-list/carros-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    PessoaslistComponent,
    FooterComponent,
    PessoasdetailsComponent,
    LoginComponent,
    LivrosListComponent,
    CarrosDetailsComponent,
    LivrosDetailsComponent,
    CarrosListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
