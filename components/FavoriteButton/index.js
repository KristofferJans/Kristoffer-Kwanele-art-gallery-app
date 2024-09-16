import SvgComponent from "../SVG/svgComponent";
import styled from "styled-components";

const FavoriteButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Svg = styled(SvgComponent)`
  width: 28px;
  height: 28px;
  fill: ${({ isFavorite }) => (isFavorite ? "red" : "gray")};
  transition: fill 0.1s;

  &:hover {
    fill: ${({ isFavorite }) => (isFavorite ? "#ff4d4d" : "#666")};
  }
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <FavoriteButtonStyled type="button" onClick={onToggleFavorite}>
      <Svg isFavorite={isFavorite} />
    </FavoriteButtonStyled>
  );
}
