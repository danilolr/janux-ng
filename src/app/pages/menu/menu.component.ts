import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOptions = [{
    'label' : 'Dashboard',
    'menu' : 'dashboard',
    'icon' : 'icon-bar-chart'
  },{
    'label' : 'Messages',
    'menu' : 'messages',
    'icon' : 'icon-envelope'
  },{
    'label' : 'Widgets',
    'menu' : 'widgets',
    'icon' : 'icon-dashboard'
  },{
    'label' : 'Tables',
    'menu' : 'tables',
    'icon' : 'icon-align-justify'
  } ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onNav(pageName : string) {
    this.router.navigateByUrl('/'+pageName);
  }

}
  