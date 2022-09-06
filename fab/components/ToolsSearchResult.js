import Link from "next/link";
import { useQuery, QueryClient, dehydrate } from "react-query";
import { request } from 'graphql-request'

const ToolsSearchResult = ({ tools }) => {
  return tools.length > 0 ? (
    <div className="search-grid">
      {tools.map((tool) => (
        <div key={tool.databaseId}>
          <div>{tool.title} | {tool.description} | {tool.quantity} | {tool.code} | {tool.toolAddress.node.title}</div>
          <Link href={`/tools/${tool.databaseId}`} key={tool.databaseId}>
            <a>
              <div className="tool-card">{tool.title}</div>
            </a>
          </Link>
        </div>
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