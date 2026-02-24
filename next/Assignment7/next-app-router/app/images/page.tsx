import Image from "next/image";

async function getImages() {
  const res = await fetch(
    "https://picsum.photos/v2/list?page=1&limit=6",
    {
      cache: "force-cache",
    }
  );

  return res.json();
}

export default async function ImagesPage() {
  const images = await getImages();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Picsum Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {images.map((img: any) => (
          <Image
            key={img.id}
            src={img.download_url}
            alt={img.author}
            width={300}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}