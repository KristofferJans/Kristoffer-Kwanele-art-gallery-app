import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

const Gallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Piece = styled.li`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 1.2em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ImageContainer = styled.div`
  margin: 10px 0;
`;

const Artist = styled.p`
  margin-top: 5px;
  color: gray;
`;

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <Gallery>
      {pieces.map((piece) => {
        const isFavorite = artPiecesInfo?.find(
          (info) => info.slug === piece.slug
        )?.isFavorite;

        return (
          <Piece key={piece.slug}>
            <Link legacyBehavior href={`/art-pieces/${piece.slug}`}>
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <ImageContainer>
                  <Image
                    src={piece.imageSource}
                    alt={piece.name}
                    width={200}
                    height={200}
                    style={{ objectFit: "cover" }} /* Verhindert Verzerrungen */
                  />
                </ImageContainer>
                <Title>{piece.name}</Title>
                <Artist>{piece.artist}</Artist>
              </a>
            </Link>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggleFavorite={() => handleToggleFavorite(piece.slug)}
            />
          </Piece>
        );
      })}
    </Gallery>
  );
}
