import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const router = useRouter();
  return (
    <>
      <h2>Title: {title}</h2>
      <h3>Artist: {artist}</h3>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <Image src={image} alt={title} height={144} width={144} />
      <button
        class="button_detailspage"
        onClick={() => router.push("/art-pieces")}
      >
        Go back
      </button>
    </>
  );
}
