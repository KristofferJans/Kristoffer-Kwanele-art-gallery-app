import ArtPieces from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
    useRouter() {
      return { push: jest.fn() };
    },
  }));

  const data = {"slug":"orange-red-and-green","artist":"Steve Johnson","name":"Orange Red and Green Abstract Painting","imageSource":"https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg","year":"2018","genre":"Abstract Painting","colors":["#0f5855","#e6ba15","#b42011","#cec4c6","#d5561f"],"dimensions":{"height":2432,"width":1920,"type":"jpg"}},

test("should render each art piece's title", () => {
    render(<ArtPieces pieces={data}
        artPiecesInfo={[]}
        handleToggleFavorite={() => {}}/>)
  });


  test("should render each art piece's artist", () => {
    /* ... test here ... */
  });


  render(<FahrenheitConverter />);
  const message = screen.getByText(/please enter a celsius value and submit/i);
  expect(message).toBeInTheDocument();
});