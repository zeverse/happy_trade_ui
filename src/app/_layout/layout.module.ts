import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./component/nav/nav.component";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { DefaultLayoutComponent } from "./component/default-layout/default-layout.component";
import {RouterOutlet} from "@angular/router";

@NgModule({
	declarations: [NavComponent, DefaultLayoutComponent],
	imports: [CommonModule, NzGridModule, NzMenuModule, NzAvatarModule, RouterOutlet],
})
export class LayoutModule {}
