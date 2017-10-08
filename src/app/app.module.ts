import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { UserComponent } from './user/user.component';
import { NewComponent } from './user/new/new.component';
import { EditComponent } from './user/edit/edit.component';
import { TaskComponent } from './task/task.component';
import { StatsComponent } from './stats/stats.component';
import { ConfigComponent } from './config/config.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'task', component: TaskComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'config', component: ConfigComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    SideNavComponent,
    UserComponent,
    NewComponent,
    EditComponent,
    TaskComponent,
    StatsComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
