import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <div>
      <ArtPieces
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      ></ArtPieces>
    </div>
  );
}
