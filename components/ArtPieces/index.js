import Image from "next/image";
import List from "../List";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieces({
  pieces,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <ul>
      {pieces.map((piece) => {
        // Prüfe für jedes Kunstwerk, ob es ein Favorit ist
        const isFavorite = artPiecesInfo?.find(
          (info) => info.slug === piece.slug
        )?.isFavorite;
        return (
          <li key={piece.slug}>
            <Link legacyBehavior href={`/art-pieces/${piece.slug}`}>
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <h2>{piece.name}</h2>
                <Image
                  src={piece.imageSource}
                  alt={piece.name}
                  height={144}
                  width={144}
                />
                <p>Artist: {piece.artist}</p>
              </a>
            </Link>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggleFavorite={() => handleToggleFavorite(piece.slug)}
            />
          </li>
        );
      })}
    </ul>
  );
}

// Next.js Link component for navigating to the details page of the art piece
// The legacyBehavior prop is used to maintain the old behavior of Link wrapping an <a> tag
// Without the a tag with the inline styling and the legacy behavior prop, everything is displayed as a link -
// that's why we added this here, so that you can click anywhere and be redirected to the details page but the content is not displayed as a link, but normally
