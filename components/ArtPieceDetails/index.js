import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton";
import CommentForm from "../CommentForm";
import Comments from "../Comments";
import styled from "styled-components";

const DetailsContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`;

const Artist = styled.h3`
  font-size: 1.5em;
  margin-bottom: 5px;
  color: gray;
`;

const Info = styled.p`
  font-size: 1em;
  margin: 5px 0;
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const ColorPalette = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px;
  border: 1px solid #ccc;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  comments,
  onSubmitComment,
  slug,
  colors,
}) {
  const router = useRouter();

  const foundComments = comments?.filter((comment) => comment.slug === slug);

  return (
    <DetailsContainer>
      <BackButton onClick={() => router.push("/art-pieces")}>
        Go back
      </BackButton>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
      <Info>Year: {year}</Info>
      <Info>Genre: {genre}</Info>
      <ImageContainer>
        <Image src={image} alt={title} width={300} height={300} />
      </ImageContainer>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <ColorPalette>
        {colors.map((color, index) => (
          <Circle key={index} color={color} />
        ))}
      </ColorPalette>
      <Comments comments={foundComments} />
      <CommentForm onSubmitComment={onSubmitComment} />
    </DetailsContainer>
  );
}
