
export type CartItem = {
    productId: string;
    productTitle: string;
    price: number;
    maxCountReserve:number;
    count: number;
    productFirstImage: string;
    pricePayForShow: string;
    pricePay: number;
    id: string;
  };


export type  cartsTyps = {
    orderStatus: number;
    price: number;
    discountPrice: number;
    pricePay: number;
    discountCode: string;
    addressName: null;
    fullLocation: null;
    latitude: null;
    longitude: null;
    addressTel: null;
    addressFullName: null;
    orderItems: CartItem[];
}