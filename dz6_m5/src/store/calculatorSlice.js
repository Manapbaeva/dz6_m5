import { configureStore, createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        num1: '',
        num2: '',
        result: ''
    },
    reducers: {
        setNum1: (state, action) => {
            state.num1 = action.payload;
        },
        setNum2: (state, action) => {
            state.num2 = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        }
    }
});

export const store = configureStore({
    reducer: {
        calculator: calculatorSlice.reducer
    }
});
