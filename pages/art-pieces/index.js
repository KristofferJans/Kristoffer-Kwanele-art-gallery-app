import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({ data }) {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={data}></ArtPieces>
    </div>
  );
}
