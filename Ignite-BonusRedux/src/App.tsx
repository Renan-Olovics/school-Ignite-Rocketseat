import { Provider } from 'react-redux'

import { Catalog } from './components/Catalog'
import { Cart } from './components/Cart'
import { store } from './store'

export function App() {
  return (
    <>
      <Provider store={store}>
        <Catalog />
        <Cart />
      </Provider>
    </>
  )
}
