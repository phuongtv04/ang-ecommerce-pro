import { Component } from '@angular/core';
import { menuList } from '../../data/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  navList:any = [];
  constructor() { }

  ngOnInit(): void {
    this.navList = menuList;
  }

}