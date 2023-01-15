export type ShopeeFoodGetIdResponse = {
	reply: {
		restaurant_id: number;
		delivery_id: number;
	};
	result: string;
};
export type ShopeeFoodDishResponse = {
	reply: {
		menu_infos: Array<ShopeeFoodDishDetail>;
	};
	result: string;
};
export type ShopeeFoodDishDetail = {
	is_deleted: boolean;
	description: string;
	name: string;
	price: ShopeeFoodDishPrice;
	is_active: boolean;
	discount_price: ShopeeFoodDishPrice;
	total_like: string;
	properties: Array<any>;
	photos: Array<ShopeeFoodDishPhoto>;
	options: Array<any>;
	is_available: boolean;
	is_searchable: boolean;
	time: ShopeeFoodDishTime;
	id: number;
	display_order: number;
	is_group_discount_item: boolean;
	quantity: number;
};

type ShopeeFoodDishPrice = {
	text: string;
	value: number;
	unit: string;
};

type ShopeeFoodDishPhoto = {
	width: number;
	height: number;
	value: string;
};

type ShopeeFoodDishTime = {
	available: Array<any>;
	week_days: Array<{
		start: string;
		week_day: number;
		end: string;
	}>;
	not_available: Array<any>;
};
