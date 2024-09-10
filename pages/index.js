import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
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
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={data}></ArtPieces>
      <Spotlight pieces={data}></Spotlight>
    </div>
  );
}
