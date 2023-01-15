import { VendorService } from "../../interface/vendor.interface";
import { Vendor } from "../../type/vendor/vendor.type";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import {
	ShopeeFoodDishDetail,
	ShopeeFoodDishResponse,
	ShopeeFoodGetIdResponse,
} from "../../type/vendor/shopee-food.type";
import { ShopeeFoodResponseTransformer } from "../../transformer/response/shopee-food-response.transformer";

@Injectable()
export class ShopeeFoodServiceImp implements VendorService {
	constructor(private readonly httpClient: HttpClient) {}
	getFoodList(vendor: Vendor): Observable<Array<any>> {
		return this.getDataFromURL(vendor.url)
			.pipe(switchMap((deliveryId) => this.getShopeeFoodDishesDetail(deliveryId)))
			.pipe(map((response) => this.getShoppeFoodUniqueDetail(response)))
			.pipe(
				map((dishes) => dishes.map((dish) => ShopeeFoodResponseTransformer.transformShopeeFoodDishDetail(dish)))
			);
	}

	searchRestaurant(keyword: string): Observable<Array<Vendor>> {
		return new Observable<Array<Vendor>>();
	}

	private getDataFromURL(url: string): Observable<number> {
		return this.httpClient
			.get<ShopeeFoodGetIdResponse>(environment.shopeeFoodAPIEndpoint.getIdFromURL.url, {
				headers: environment.shopeeFoodAPIEndpoint.getIdFromURL.headers,
				params: {
					url,
				},
			})
			.pipe(map((data) => data.reply.delivery_id));
	}

	private getShopeeFoodDishesDetail(deliveryId: number): Observable<ShopeeFoodDishResponse> {
		return this.httpClient.get<ShopeeFoodDishResponse>(environment.shopeeFoodAPIEndpoint.getFoodDetail.url, {
			headers: environment.shopeeFoodAPIEndpoint.getFoodDetail.headers,
			params: {
				id_type: 2,
				request_id: deliveryId,
			},
		});
	}

	private getShoppeFoodUniqueDetail(response: ShopeeFoodDishResponse): Array<ShopeeFoodDishDetail> {
		return response.reply.menu_infos.flat().filter((item, itemIndex, self) => self.indexOf(item) === itemIndex);
	}
}
