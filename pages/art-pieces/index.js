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

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <div>
      <Title>Art Pieces</Title>
      <ArtPieces
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      ></ArtPieces>
    </div>
  );
}
