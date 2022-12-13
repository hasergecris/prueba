import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


// Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ServicioGeneralService } from './services/servicio-general.service';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { CharacterComponent } from './pages/character/character/character.component';
import { BuscardorComponent } from './components/shared/buscardor/buscardor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GatosComponent,
    CharacterComponent,
    BuscardorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
  ],
  providers: [ServicioGeneralService],
  bootstrap: [AppComponent],
})
export class AppModule {}
