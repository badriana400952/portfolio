import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice } from "./features/presonSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProductSlice } from "./features/addProduct";

export const store = configureStore({
    reducer: {
        person: PersonSlice.reducer,
        product: ProductSlice.reducer,
    }
})

export const useAppDispatch: () => typeof store.dispatch= useDispatch;
export const useAppSeleector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector