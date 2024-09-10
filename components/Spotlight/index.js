import { useState, useEffect } from "react";
import Image from "next/image";

export default function Spotlight({ pieces }) {
  const [randomArtPiece, setRandomArtPiece] = useState();

  function getRandomNumber() {
    const randomPicture = pieces[Math.floor(Math.random() * pieces.length)];
    return randomPicture;
  }
  useEffect(() => {
    setRandomArtPiece(getRandomNumber());
  }, [pieces]);

  if (!randomArtPiece) return;

  console.log("randomArtPiece", randomArtPiece);

  return (
    <Image
      src={randomArtPiece.imageSource}
      alt={randomArtPiece.name}
      height={144}
      width={144}
    />
  );
}
