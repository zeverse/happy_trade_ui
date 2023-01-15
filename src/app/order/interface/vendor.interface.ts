import {Observable} from "rxjs";
import {Vendor} from "../type/vendor/vendor.type";

export interface VendorService {
	getFoodList(vendor: Vendor): Observable<Array<any>>

	searchRestaurant(keyword: string): Observable<Array<Vendor>>
}
