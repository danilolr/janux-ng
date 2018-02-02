import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MesssagesComponent } from './pages/messages/messages.component';
import { HeaderMenuComponent } from './pages/headermenu/headermenu.component';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'messages', component: MesssagesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    MesssagesComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
