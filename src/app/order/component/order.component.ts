import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-order",
	templateUrl: "./order.component.html",
	styleUrls: ["./order.component.sass"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {}
