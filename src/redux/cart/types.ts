export type StateItemCart = {
  id: number;
  name: string;
  price: number;
  size: number;
  img: string[];
  color: string;
  itemCount: number;
};

export interface StateCartSice {
  item: StateItemCart[];
  totalPrice: number;
  totalCount: number;
}
