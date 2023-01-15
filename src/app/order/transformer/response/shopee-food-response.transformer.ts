import { ShopeeFoodDishDetail } from "../../type/vendor/shopee-food.type";
import { DishDetail } from "../../type/dish/dish-detail.type";

export class ShopeeFoodResponseTransformer {
	static transformShopeeFoodDishDetail(dishDetail: ShopeeFoodDishDetail): DishDetail {
		return {
			name: dishDetail.name,
			price: dishDetail.price.value,
			photo: dishDetail.photos[0].value,
		};
	}
}
