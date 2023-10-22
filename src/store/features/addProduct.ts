import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: Blob | MediaSource | string;
  }

interface ProductState {
    product: Product[];
}

const initialState:ProductState = {
    product: []
}

export const getDatas = createAsyncThunk("product/getDatas", async () => {
    const respons = await axios.get(`http://localhost:5000/api/v1/product`)
    return respons.data
})
export const tambahDataProduct = createAsyncThunk("perdon/tambahDataProduct", async (newData : Product) => {
    const formData = new FormData();
    // formData.append("id", form.id);
    formData.append("name", newData.name);
    formData.append("price", newData.price.toString());
    formData.append("category", newData.category);
    formData.append("image", newData.image as File | Blob | string);
    const respons = await axios.post(`http://localhost:5000/api/v1/addproduct`, formData)
   
    return respons.data
})
export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product> ) => {
            state.product.push(({
                id: state.product.length.toString(),
                name: action.payload.name,
                price: action.payload.price,
                category: action.payload.category,
                image: action.payload.image,
            }))
        } 

    },
    extraReducers: (builder) => {
        builder.addCase(getDatas.fulfilled, (state, action) => {
            console.log("PAYLOAD",action.payload);
            
            state.product = action.payload
        });
        // builder.addCase(tambahDataProduct.fulfilled, (state, action) => {
        //     state.product.push(action.payload.data)
        // })
    }
})
export default ProductSlice.reducer;
export const {addProduct} = ProductSlice.actions