import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

interface QuotesState {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
}

const initialState: QuotesState = {
  quotes: [],
  loading: false,
  error: null,
};

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    const data = await res.json();
    return data.quotes; 
  }
);

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch quotes";
      });
  },
});

export default quotesSlice.reducer;
