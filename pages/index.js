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
      <Spotlight
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      ></Spotlight>
    </div>
  );
}
