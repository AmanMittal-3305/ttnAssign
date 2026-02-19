"use client";

import { useLoader } from "../context/LoaderContext";

export default function Loader() {
  const { loading } = useLoader();

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
}
