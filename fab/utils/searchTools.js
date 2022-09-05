import { ALL_TOOLS } from "../constants/allTools";


export default function searchTools(tools, query) {
  function search(tools, keyword) {
    let some_tools = []
    for (let tool of tools) {
      if (tool.node.title.toString().toLowerCase().includes(keyword)) {
        some_tools.push(tool.node.databaseId.toString())
        //some_tools.push(tool.node.title.toString())
      }
    }
    return some_tools//(some_tools.length > 0) ? some_tools : "Й"
  }

  return new Promise((resolve) => {
      // const matchingTools = ALL_TOOLS.filter(({ name }) =>
      //     name.includes(query.toLowerCase())
      // ).map(({ name }) => name);
      const matchingTools = search(tools, query)     
      resolve(matchingTools);
  });
}
