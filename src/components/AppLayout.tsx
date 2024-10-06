import React, { useState } from "react"
import { useCustomQuery } from "../hooks/useCustomQuery";
import { searchVolumes } from "../services/apiSearch";
import BooksList from "./BooksList";
import Box from "./Box";
import MainContent from "./MainContent";
import NavBar from "./NavBar";
import Search from "./Search";
import { NumOfResults } from "./NumOfResults";
import Loader from "./Loader";
import BookFull from "./BookFull";
import { useBookSelector } from "../store/BookStore";

const AppLayout: React.FC = () => {  
    const {status, error} = useBookSelector((state) => state.book);

  return (
    <>
            <NavBar>
                <Search />
                <NumOfResults />
            </NavBar>

            <MainContent>
                <Box>
                    {error && 'An error has occurred: ' + error}
                    {status === 'fetching' && <Loader />}
                    <BooksList />
                </Box>

                <Box>
                    <BookFull />
                </Box>
        </MainContent>
    </>
  )
};

export default AppLayout;
