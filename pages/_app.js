import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

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
  if (!data) return;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log("data", data);
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} data={data} />
    </>
  );
}
