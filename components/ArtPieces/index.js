import Image from "next/image";
import List from "../List";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <div>
            <h2>{piece.name}</h2>
            <Image
              src={piece.imageSource}
              alt={piece.name}
              height={144}
              width={144}
            />
            <p>Artist: {piece.artist}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
