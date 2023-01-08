import { Component, OnInit } from '@angular/core';
import { NavConfigList } from '../../../common/config/nav.config';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {
  navConfigList: Routes = NavConfigList;
  constructor() {}

  ngOnInit(): void {}
}
