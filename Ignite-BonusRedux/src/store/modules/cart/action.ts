import { ActionTypes, IProduct } from './types'

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.AddProductToCartRequest,
    payload: {
      product,
    },
  }
}
export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.AddProductToCartSuccess,
    payload: {
      product,
    },
  }
}
export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.AddProductToCartFailure,
    payload: {
      productId,
    },
  }
}
