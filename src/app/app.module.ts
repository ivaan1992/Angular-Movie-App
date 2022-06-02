import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from './components/table/materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactModule } from './components/form/contact-form.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ContactModule,
    MaterialsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
