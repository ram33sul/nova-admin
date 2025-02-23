import { legacy_createStore } from "redux";
import rootReducer from "./rootReducer";

const store = legacy_createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export default store;
