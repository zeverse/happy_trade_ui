import { ChangeDetectionStrategy, Component } from "@angular/core";
import { DishDetail } from "../type/dish/dish-detail.type";
import { Observable } from "rxjs";
import { VendorService } from "../interface/vendor.interface";
import { ShopeeFoodServiceImp } from "../service/vendor/shopee.service";

@Component({
	selector: "app-order",
	templateUrl: "./order.component.html",
	styleUrls: ["./order.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
	dishes$: Observable<Array<DishDetail>> = new Observable<Array<DishDetail>>();
	shopInput: string = "";

	constructor(private readonly shopeeService: ShopeeFoodServiceImp) {
		this.dishes$ = shopeeService.getFoodList({
			id: "",
			name: "",
			address: "",
			estimateDeliveryTime: new Date(),
			url: "ha-noi/loving-hut-com-chay-nguon-coi",
		});
	}

	onSearch() {}
}
