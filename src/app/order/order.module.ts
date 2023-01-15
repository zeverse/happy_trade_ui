import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderComponent } from "./component/order.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzInputModule } from "ng-zorro-antd/input";
import { FormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { ShopeeFoodServiceImp } from "./service/vendor/shopee.service";

@NgModule({
	declarations: [OrderComponent],
	providers: [ShopeeFoodServiceImp],
	imports: [
		CommonModule,
		HttpClientModule,
		NzSpaceModule,
		NzCardModule,
		NzInputModule,
		FormsModule,
		NzButtonModule,
	],
	exports: [OrderComponent],
})
export class OrderModule {}
