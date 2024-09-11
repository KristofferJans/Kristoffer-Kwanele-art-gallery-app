import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log("slug", slug);

  if (!data) return null;

  // Find the art piece that matches the slug
  const artPiece = data.find((data) => data.slug === slug);

  // If no art piece is found, handle the case
  if (!artPiece) {
    return <div>Art piece not found</div>;
  }

  return (
    <>
      <ArtPieceDetails
        image={artPiece.imageSource}
        title={artPiece.name}
        artist={artPiece.artist}
        year={artPiece.year}
        genre={artPiece.genre}
      />
    </>
  );
}
