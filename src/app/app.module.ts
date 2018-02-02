import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HeaderMenuComponent } from './pages/headermenu/headermenu.component';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MesssagesComponent } from './pages/messages/messages.component';
import { TablesComponent } from './pages/tables/tables.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
 
const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'messages', component: MesssagesComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'widgets', component: WidgetsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderMenuComponent,
    DashboardComponent,
    MesssagesComponent,
    TablesComponent,
    WidgetsComponent
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
