import { useQuery } from "react-query"
import useDebounce from "../utils/useDebounce"
import searchTools from "../utils/searchTools"
import ToolsSearchResult from "../components/ToolsSearchResult";
import { useState } from 'react'
import { getAllTools } from '../utils/wordpress'

export default function ToolsSearch({ allTools: {edges}, preview }) {
  const [searchValue, setSearchValue] = useState("");
  const debounedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchTools", debounedSearchValue],
    () => searchTools(edges, debounedSearchValue),
    {
      enabled: debounedSearchValue.length > 0
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message"> Loading... </div>;
    }

    if (isError) {
      return <div className="search-message"> Something went wrong </div>;
    }

    if (isSuccess) {
      return <ToolsSearchResult tools={data} />;
    }

    return <></>;
  };

  return (
    <div className="home">
      <h1>Search Tool</h1>
      <input
        type="text"
        onChange={({ target: { value } }) => setSearchValue(value)}
        value={searchValue}
      />
      {renderResult()}
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allTools = await getAllTools();  

  return {
    props: {
      allTools,
      preview,
    },
    revalidate: 10, // In seconds
  };
}