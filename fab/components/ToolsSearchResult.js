import Link from "next/link";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { request } from 'graphql-request'

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



// export default function ToolsSearchResult({ toolsIds })  {
// const query = `
//   query SomeTools($in: [ID]) {
//     tools(where: {in: $in}) {
//       edges {
//         node {
//           databaseId
//           id
//           title
//           quantity
//           code
//           description
//           photo {
//             databaseId
//             mediaItemUrl
//             altText
//             caption
//           }
//           toolAddress {
//             node {
//               title
//             }
//           }
//         }
//       }
//     }
//   } 
//`
//   const fetchTools = (query, toolIds) => request('http://cc21101-wordpress-boyv0.tw1.ru/graphql', query, {in: toolIds}).then((data) => data)

//   return toolIds.length > 0 ? (
//     <div className="search-grid">
//       yo
//     </div>
//   ) : (
//     <div className="search-message"> No tools found</div>
//   );
// }