import React, { useEffect, useState } from "react"
import Button from "./Button";
import { useCustomQuery } from "../hooks/useCustomQuery";
import { searchVolumes } from "../services/apiSearch";
import { loadResults, setInfo } from "../slices/bookSlice";
import { useBookDispatch } from "../store/BookStore";

const Search: React.FC = () => {
  const dispatch = useBookDispatch();
  
  const [query, setQuery] = useState('');
  const { fetchStatus, error, refetch } = useCustomQuery('searchBooks', () => searchVolumes(query));

  useEffect(() => {
        dispatch(setInfo({status: fetchStatus, error: error ? error.message : ''}));
  }, [fetchStatus, error])
  
  
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      if (!query) return;
      
      refetch().then(response => {
          if (response.isSuccess) {
              const items = response.data.items;
              dispatch(loadResults(items));
          }
      });
  }

  return (
    <div>
        <form onSubmit={(e) => handleSearch(e)}>
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
