import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
