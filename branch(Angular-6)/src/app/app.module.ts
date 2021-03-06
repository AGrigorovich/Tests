import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FirebaseModule, FirebaseProvider} from 'angular-firebase';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login';
import {NotFoundComponent} from './components/notFound';
import {MainPageComponent} from './components/mainPage';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: MainPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FirebaseModule
  ],
  providers: [FirebaseProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
