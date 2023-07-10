import store from '@/redux/store/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  let persistor = persistStore(store)
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className='bg-white dark:bg-background'>
      <Component {...pageProps} />
      </div>
    </PersistGate>
  </Provider>
}
