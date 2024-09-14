import { useState, useEffect } from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

// Styled Components direkt in der Spotlight-Datei definiert
const DetailsContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const Artist = styled.h3`
  font-size: 1.5em;
  margin-bottom: 5px;
  color: gray;
`;

const Info = styled.p`
  font-size: 1em;
  margin: 5px 0;
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const ColorPalette = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px;
  border: 1px solid #ccc;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

export default function Spotlight({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState();

  useEffect(() => {
    if (pieces.length > 0) {
      const randomIndex = Math.floor(Math.random() * pieces.length);
      setRandomArtPiece(pieces[randomIndex]);
    }
  }, [pieces]);

  if (!randomArtPiece) return null;

  const { imageSource, name, artist, year, genre, colors, slug } =
    randomArtPiece;

  const isFavorite = artPiecesInfo?.find(
    (info) => info.slug === slug
  )?.isFavorite;

  return (
    <DetailsContainer>
      <Title>{name}</Title>
      <Artist>{artist}</Artist>
      <Info>Year: {year}</Info>
      <Info>Genre: {genre}</Info>
      <ImageContainer>
        <Image
          src={imageSource}
          alt={name}
          layout="responsive"
          width={100}
          height={100}
        />
      </ImageContainer>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => handleToggleFavorite(slug)}
      />

      <ColorPalette>
        {colors.map((color, index) => (
          <Circle key={index} color={color} />
        ))}
      </ColorPalette>
    </DetailsContainer>
  );
}
