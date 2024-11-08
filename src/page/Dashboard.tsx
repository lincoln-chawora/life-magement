import React from "react"
import BookFull from "../components/BookFull";
import BooksList from "../components/BooksList";
import Box from "../components/Box";
import Loader from "../components/Loader";
import { useBookSelector } from "../store/BookStore";

const Dashboard: React.FC = () => {
  const {status, error} = useBookSelector((state) => state.book);
  
  return (
    <>
      <Box>
          {error && 'An error has occurred: ' + error}
          {status === 'fetching' && <Loader />}
          <BooksList />
      </Box>

      <Box>
          <BookFull />
      </Box>
    </>
  )
};

export default Dashboard;
