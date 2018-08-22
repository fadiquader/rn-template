import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
//
import ReduxPersist from '../config/reduxPersist'
import { startup as startupAction } from '../redux/startup/actions'

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion;
  const startup = () => store.dispatch(startupAction({}));

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      // Purge store
      persistStore(store, null, startup).purge();
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, null, startup);
    }
  }).catch(() => {
    persistStore(store, null, startup);
    AsyncStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default { updateReducers }
