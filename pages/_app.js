import store from '@/redux/store/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  let persistor = persistStore(store)
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className='bg-white dark:bg-darkBg overflow-hidden absolute top-0 left-0 -z-50 w-full min-h-screen'>
        <div className='container font-primary'>
          <Component {...pageProps} />
        </div>
      </div>
    </PersistGate>
  </Provider>
}
