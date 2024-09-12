import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      ></ArtPieces>
    </div>
  );
}
