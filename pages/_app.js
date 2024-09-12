import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import { useImmer } from "use-immer";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const fetcher = async (url) => {
    const response = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return response.json();
  };
  const { data, mutate, error, isLoading } = useSWR(URL, fetcher);

  // Initialize the state with useImmer
  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);

  function handleToggleFavorite(slug) {
    updateArtPiecesInfo((draft) => {
      // find the art piece in the state
      const info = draft.find((info) => info.slug === slug);

      // if the art piece is already in the state, toggle the isFavorite property
      if (info) {
        info.isFavorite = !info.isFavorite;
      } else {
        // if the art piece is not in the state, add it with isFavorite set to true
        draft.push({ slug, isFavorite: true });
      }
    });
    console.log("Updated artPiecesInfo:", artPiecesInfo);
  }

  // Log the props passed to the page component
  console.log("Props passed to page component:", {
    artPiecesInfo,
    handleToggleFavorite,
  });

  if (!data) return <div>Loading data...</div>;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}

/*
***
USE STATE APROACH 
***

const [artPiecesInfo, setArtPiecesInfo] = useState([]);

function handleToggleFavorite(slug) {
  setArtPiecesInfo((artPiecesInfo) => {
    // find the favorite art piece in the state
    const favs = artPiecesInfo.find((favs) => favs.slug === slug);

    // if the favorite art piece is already in the state, toggle the isFavorite property
    if (favs) {
      return artPiecesInfo.map((favs) => 
        favs.slug === slug ? {...favs, isFavorite: !favs.isFavorite} : favs
      );
    }
    // if the favorite art piece is not in the state, add it with isFavorite set to true
    return [...artPiecesInfo, {slug, isFavorite: true}];
  });
}

const { isFavorite } = artPiecesInfo.find((favs) => favs.slug === slug) ?? {
  isFavorite: false,
};

***
USE IMMER APROACH 
***

// Initialize the state with useImmer
const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);

function handleToggleFavorite(slug) {
  updateArtPiecesInfo((draft) => {
    // find the art piece in the state
    const info = draft.find((info) => info.slug === slug);

    // if the movie is already in the state, toggle the isFavorite property
    if (info) {
      info.isFavorite = !info.isFavorite;
    } else {
      // if the movie is not in the state, add it with isFavorite set to true
      draft.push({ slug, isFavorite: true });
    }
  });
}
*/
