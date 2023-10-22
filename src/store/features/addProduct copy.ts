import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { ApiData } from "../../api/api";
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
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    product: [],
    loading: false,
    error: null,
};

export const getDatas = createAsyncThunk("product/getDatas", async () => {
    try {
        const respons = await axios.get(`http://localhost:5000/api/v1/product`)
        return respons.data
    } catch (error) {
        console.log("error getDatas" , error)
    }
})

export const tambahDataProduct = createAsyncThunk("product/tambahDataProduct", async (newData: Product) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/v1/addproduct`, newData);
        return response.data;
    } catch (error) {
        console.log("error getDatas" , error)
    }
});

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
        builder
        .addCase(getDatas.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getDatas.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = false;
        })
        .addCase(getDatas.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch data.";
        })
        .addCase(tambahDataProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(tambahDataProduct.fulfilled, (state, action) => {
            state.product.push(action.payload.data);
            state.loading = false;
        })
        .addCase(tambahDataProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to add product.";
        });
},
})
export default ProductSlice.reducer;
export const {addProduct} = ProductSlice.actions