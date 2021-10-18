import { all, takeLatest, select, call, put } from 'redux-saga/effects'

import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './action'
import { IState } from '../..'
import { api } from '../../../services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes } from './types'

type CheckProductStockRequestProps = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
  id: number
  quantity: number
}

function* checkProductStocks({ payload }: CheckProductStockRequestProps) {
  const { product } = payload

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find((item) => item.product.id === product.id)?.quantity ?? 0
  })

  const availableStockResponses: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  )

  if (availableStockResponses.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }
}

export default all([takeLatest(ActionTypes.AddProductToCartRequest, checkProductStocks)])
