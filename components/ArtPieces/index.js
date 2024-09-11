import Image from "next/image";
import List from "../List";
import Link from "next/link";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
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
        </li>
      ))}
    </ul>
  );
}

// Next.js Link component for navigating to the details page of the art piece
// The legacyBehavior prop is used to maintain the old behavior of Link wrapping an <a> tag
// Without the a tag with the inline styling and the legacy behavior prop, everything is displayed as a link -
// that's why we added this here, so that you can click anywhere and be redirected to the details page but the content is not displayed as a link, but normally
