import {Injectable} from "@angular/core";
import {VendorService} from "../../interface/vendor.interface";
import {Observable} from "rxjs";
import {Vendor} from "../../type/vendor.type";

@Injectable()
export class GrabServiceImp implements VendorService {
	getFoodList(vendor: Vendor): Observable<Array<any>> {
		return undefined;
	}

	getRestaurantList(keyword: string): Observable<Array<Vendor>> {
		return undefined;
	}
}
