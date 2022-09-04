import { ALL_TOOLS } from "../constants/allTools";

const searchTools = (query) => {
  return new Promise((resolve) => {
    const matchingTools = ALL_TOOLS.filter(({ name }) =>
      name.includes(query.toLowerCase())
    ).map(({ name }) => name);

    setTimeout(() => {
      resolve(matchingTools);
    }, 500);
  });
};

export default searchTools;