import ArtPieces from "@/components/ArtPieces";
import styled from "styled-components";

const Title = styled.h1`
  margin: 10px 0;
  font-size: 2em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

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
      <Title>Favorite Art Pieces</Title>
      <ArtPieces
        pieces={favoritePieces}
        handleToggleFavorite={handleToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
      ;
    </>
  );
}
