import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
  handleAddComment,
}) {
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

  const isFavorite = artPiecesInfo.find(
    (info) => info.slug === slug
  )?.isFavorite;

  // Find the comments for this specific art piece - comment functionality
  const artPieceInfo = artPiecesInfo.find((info) => info.slug === slug);
  const comments = artPieceInfo?.comments || []; // Ensure comments is an array

  return (
    <>
      <ArtPieceDetails
        image={artPiece.imageSource}
        title={artPiece.name}
        artist={artPiece.artist}
        year={artPiece.year}
        genre={artPiece.genre}
        isFavorite={isFavorite}
        onToggleFavorite={() => handleToggleFavorite(artPiece.slug)}
        comments={comments} // Pass comments array to display in ArtPieceDetails
        onAddComment={(comment) => handleAddComment(artPiece.slug, comment)} // Handle comment submission
      />
    </>
  );
}
