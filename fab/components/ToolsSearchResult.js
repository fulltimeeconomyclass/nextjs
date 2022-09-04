import Link from "next/link";

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
