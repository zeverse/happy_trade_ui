import {Observable} from "rxjs";
import {Vendor} from "../type/vendor.type";

export interface VendorService {
	getFoodList(vendor: Vendor): Observable<Array<any>>

	getRestaurantList(keyword: string): Observable<Array<Vendor>>
}
