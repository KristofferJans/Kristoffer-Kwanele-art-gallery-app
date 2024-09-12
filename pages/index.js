import ArtPieces from "@/components/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <div>
      {/* <h1>Hello from Next.js</h1>
      <ArtPieces pieces={data}></ArtPieces> */}
      <Spotlight
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      ></Spotlight>
    </div>
  );
}
