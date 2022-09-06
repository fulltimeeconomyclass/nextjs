import { useQuery, QueryClient, dehydrate } from "react-query"
import { useRouter } from "next/router"
import { request } from 'graphql-request'
import ToolCard from "../../components/ToolCard"


const fetchToolgQL = (id) => {
  const query = `
  query GetTool($id: Int) {
    tools(where: {id: $id}) {
      edges {
        node {
          databaseId
          id
          title
          quantity
          code
          description
          photo {
            databaseId
            mediaItemUrl
            altText
            caption
          }
          toolAddress {
            node {
              title
            }
          }
        }
      }
    }
  }
  `
  return request('http://cc21101-wordpress-boyv0.tw1.ru/graphql', query, {id: parseInt(id)}).then((data) => data)
}

export default function Tool() {
  const router = useRouter();
  const toolID = typeof router.query?.id === "string" ? router.query.id : "";

  const { isSuccess, data, isLoading, isError } = useQuery(
    ["getTool", toolID],
    () => fetchToolgQL(toolID),
    {
      enabled: toolID.length > 0,
      staleTime: Infinity
    }
  );

  if (isSuccess) {
    return (
      <div className="container">
        <ToolCard
          name={data.tools.edges[0].node.title} 
          image={data.tools.edges[0].node.photo.mediaItemUrl}
          quantity={data.tools.edges[0].node.quantity}
          code={data.tools.edges[0].node.code}
          description={data.tools.edges[0].node.description}
          address={data.tools.edges[0].node.toolAddress.node.title}
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

  await queryClient.prefetchQuery(["getTool", id], () => fetchToolgQL(id));

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
