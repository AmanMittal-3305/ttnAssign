"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../store/quotesSlice";
import type { RootState, AppDispatch } from "../store/store";

export default function QuotesPage() {
  const dispatch = useDispatch<AppDispatch>();

  const { quotes, loading, error } = useSelector(
    (state: RootState) => state.quotes
  );

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quotes Page</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {quotes.map((quote) => (
        <div
          key={quote.id}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          <p>{quote.quote}</p>
          <p>
            <strong>- {quote.author}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}
