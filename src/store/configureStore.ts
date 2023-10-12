import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import { createReducer } from "./reducers";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with sagas middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
      ...middlewares,
    ],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== "production" ||
      (process.env.PUBLIC_URL?.length ?? 0) > 0,
    enhancers,
  });

  return store;
}

////////////////////////////////////////////

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";

// import { rootReducer } from "./reducers";
// import { rootSaga } from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [...getDefaultMiddleware(), sagaMiddleware];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
//   devTools:
//     process.env.NODE_ENV !== "production" ||
//     (process.env.PUBLIC_URL?.length ?? 0) > 0,
// });

// sagaMiddleware.run(rootSaga);

// export default store;

// //////////////////////////////
