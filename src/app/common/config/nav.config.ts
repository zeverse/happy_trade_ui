import { Routes } from '@angular/router';
import { OrderComponent } from '../../order/component/order.component';
import { DefaultLayoutComponent } from '../../_layout/component/default-layout/default-layout.component';

export const NavConfigList: Routes = [
  {
    title: 'Order',
    path: 'order',
    component: OrderComponent,
  },
];
export const RouteConfigList: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DefaultLayoutComponent,
    children: NavConfigList,
  },
];
