import React, { useState } from "react"
import Button from "./Button";

const Search: React.FC = ({query, setQuery, onSearch}) => {
  return (
    <div>
        <form onSubmit={onSearch}>
            <input
                className="search"
                type="text"
                placeholder="Search books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
};

export default Search;
