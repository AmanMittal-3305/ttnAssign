import { NextResponse } from "next/server";

let products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newProduct = {
    id: Date.now(),
    name: body.name,
  };

  products.push(newProduct);

  return NextResponse.json(newProduct);
}

export async function DELETE(request: Request) {
  const body = await request.json();

  products = products.filter((p) => p.id !== body.id);

  return NextResponse.json({ message: "Deleted successfully" });
}
