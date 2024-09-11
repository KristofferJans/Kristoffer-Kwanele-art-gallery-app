import SvgComponent from "../SVG/svgComponent";
import styled from "styled-components";

const Svg = styled(SvgComponent)`
  width: 28px;
  height: 28px;
  fill: ${({ isFavorite }) => (isFavorite ? "red" : "white")};
  padding: 4px;
  background: black;

  &:hover {
    fill: greenyellow;
  }
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button type="button" onClick={onToggleFavorite}>
      <Svg isFavorite={isFavorite} />
    </button>
  );
}

// onClick={}
