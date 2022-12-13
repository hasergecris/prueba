import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { CharacterComponent } from './pages/character/character/character.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'gatos', component: GatosComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
