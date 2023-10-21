import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const redirectToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'asistencia',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'asig-asis',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/asig-asis/asig-asis.module').then( m => m.AsigAsisPageModule)
  },
  {
    path: 'confirmar-asis',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/confirmar-asis/confirmar-asis.module').then( m => m.ConfirmarAsisPageModule)
  },
  {
    path: 'registro',
    
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'recuperar',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'info-asig/:index/:asignatura',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/info-asig/info-asig.module').then( m => m.InfoAsigPageModule)
  },  {
    path: 'detalles',
    loadChildren: () => import('./modals/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./modals/scanner/scanner.module').then( m => m.ScannerPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
