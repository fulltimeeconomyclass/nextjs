import axios from "axios";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { useRouter } from "next/router";
import ToolCard from "../../components/ToolCard";

const fetchTool = (id) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(({ data }) => data);

export default function Tool() {
  const router = useRouter();
  const toolID = typeof router.query?.id === "string" ? router.query.id : "";

  const { isSuccess, data: tool, isLoading, isError } = useQuery(
    ["getTool", toolID],
    () => fetchTool(toolID),
    {
      enabled: toolID.length > 0,
      staleTime: Infinity
    }
  );

  if (isSuccess) {
    return (
      <div className="container">
        <ToolCard
          name={tool.name}
          image={tool.sprites?.other?.["official-artwork"]?.front_default}
          weight={tool.weight}
          xp={tool.base_experience}
          abilities={tool.abilities?.map((item) => item.ability.name)}
        />
      </div>
    );
  }

  if (isLoading) {
    return <div className="center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="center">
        We couldnt find your tool{" "}
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    );
  }

  return <></>;
}

export const getStaticProps = async (context) => {
  const id = context.params?.id
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["getTool", id], () => fetchTool(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};
