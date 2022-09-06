import { useQuery } from "react-query"
import useDebounce from "../utils/useDebounce"
import searchTools from "../utils/searchTools"
import ToolsSearchResult from "../components/ToolsSearchResult";
import { useState, useEffect } from 'react'
import { getAllTools } from '../utils/wordpress'
import Image from 'next/image'

export default function ToolsSearch({ allTools: {edges}, preview }) {
  const [searchValue, setSearchValue] = useState("")

  const debounedSearchValue = useDebounce(searchValue, 300)

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchTools", debounedSearchValue],
    () => searchTools(edges, debounedSearchValue),
    {
      enabled: debounedSearchValue.length > 0
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="none-container"> Загрузка... </div>;
    }

    if (isError) {
      return <div className="none-container"> Что-то пошло не так :( </div>;
    }

    if (isSuccess) {
      return <ToolsSearchResult tools={data} />;
    }

    return <></>;
  };

  
  return (
    <div className="">
      <div className="app-searchbar">
        <Image src="/search-icon.svg" alt="Fabrika Logo" width={18} height={18} />
        <input
          placeholder="молоток"
          type="text"
          onChange={({ target: { value } }) => setSearchValue(value)}
          value={searchValue}
        />
      </div>
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