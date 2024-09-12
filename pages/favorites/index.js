import ArtPieces from "@/components/ArtPieces";

export default function FavoriteArtPieces({
  artPiecesInfo,
  data,
  handleToggleFavorite,
}) {
  const favoritePieces = data.filter((piece) =>
    artPiecesInfo.some((item) => piece.slug === item.slug && item.isFavorite)
  );

  if (favoritePieces.length === 0) {
    return <h2>You dont have any favorite art pieces yet!</h2>;
  }

  return (
    <>
      <h1>Favorite ArtPieces</h1>
      <ArtPieces
        pieces={favoritePieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      ;
    </>
  );
}
