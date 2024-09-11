import { useState, useEffect } from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState();

  function getRandomNumber() {
    const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];
    return randomPicture;
  }
  useEffect(() => {
    setRandomArtPiece(getRandomNumber());
  }, [pieces]);

  // Log the props to check if they are being received correctly
  useEffect(() => {
    console.log("Spotlight Props:", { artPiecesInfo, handleToggleFavorite });
  }, [artPiecesInfo, handleToggleFavorite]);

  if (!randomArtPiece) return;

  const isFavorite = artPiecesInfo?.find(
    (info) => info.slug === randomArtPiece.slug
  )?.isFavorite;

  console.log("randomArtPiece", randomArtPiece);

  return (
    <>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.name}
        height={144}
        width={144}
      />
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => handleToggleFavorite(randomArtPiece.slug)}
      />
    </>
  );
}
