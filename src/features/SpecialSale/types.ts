export interface ProductType {
    title: string;
    firstImage: string;
    price: number;
    discountPercent: number;
    priceAfterDiscount: number;
    count: number;
    maxCountReserve: number;
    categoryProductId: string;
    brandId: string;
    priceForShow: string;
    priceAfterDiscountForShow: string;
    currentReserved: number;
    id: string;
}