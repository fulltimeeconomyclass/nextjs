import Link from "next/link";
import { useQuery, QueryClient, dehydrate } from "react-query";

const ToolsSearchResult = ({ tools }) => {
  return tools.length > 0 ? (
    <div className="search-grid">
      {tools.map((tool) => (
        <Link href={`/tools/${tool}`} key={tool}>
          <a>
            <div className="tool-card">{tool}</div>
          </a>
        </Link>
      ))}
    </div>
  ) : (
    <div className="search-message"> No tools found</div>
  );
};

export default ToolsSearchResult;



// 1. graphql [ids]
// 2. 

// export default function ToolsSearchResult({ tools })  {
//   const fetchTool = (id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(({ data }) => data);

//   return tools.length > 0 ? (
//     <div className="search-grid">
//       yo
//     </div>
//   ) : (
//     <div className="search-message"> No tools found</div>
//   );
// }