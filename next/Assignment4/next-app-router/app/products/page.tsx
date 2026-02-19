"use client";

import { useEffect, useReducer, useState } from "react";
import './page.css'

interface Product {
  id: number;
  name: string;
}

type State = {
  products: Product[];
  loading: boolean;
};

type Action =
  | { type: "LOADING"; payload: boolean }
  | { type: "SET"; payload: Product[] }
  | { type: "ADD"; payload: Product }
  | { type: "DELETE"; payload: number };

const initialState: State = {
  products: [],
  loading: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };

    case "SET":
      return { ...state, products: action.payload };

    case "ADD":
      return { ...state, products: [...state.products, action.payload] };

    case "DELETE":
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload),
      };

    default:
      return state;
  }
}

export default function ProductsPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      dispatch({ type: "LOADING", payload: true });

      await new Promise(r => setTimeout(r, 3000)); 

      const res = await fetch("/api/products");
      const data = await res.json();

      dispatch({ type: "SET", payload: data });
      dispatch({ type: "LOADING", payload: false });
    }

    fetchProducts();
  }, []);

  async function addProduct() {
    if (!name.trim()) return;

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    dispatch({ type: "ADD", payload: data });
    setName("");
  }

  async function deleteProduct(id: number) {
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    dispatch({ type: "DELETE", payload: id });
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Products</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 flex-1"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-3"
          onClick={addProduct}
        >
          Add
        </button>
      </div>

      {state.loading && <p className="mb-2">Loading...</p>}

      <ul className="space-y-2">
        {state.products.map(p => (
          <li
            key={p.id}
            className="flex justify-between border p-2"
          >
            {p.name}
            <button
              onClick={() => deleteProduct(p.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
