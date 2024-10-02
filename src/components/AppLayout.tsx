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

const book = {
    "title": "Harry Potter and the Deathly Hallows",
    "authors": [
        "J. K. Rowling"
    ],
    "publisher": "Bloomsbury Publishing",
    "publishedDate": "2014-01-01",
    "description": "Burdened with the dark, dangerous, and seemingly impossible task of locating and destroying Voldemort's remaining Horcruxes, Harry, feeling alone and uncertain about his future, struggles to find the inner strength he needs to follow the path set out before him.",
    "industryIdentifiers": [
        {
            "type": "ISBN_13",
            "identifier": "9781408855713"
        },
        {
            "type": "ISBN_10",
            "identifier": "1408855712"
        }
    ],
    "readingModes": {
        "text": false,
        "image": true
    },
    "pageCount": 638,
    "printType": "BOOK",
    "categories": [
        "Fiction"
    ],
    "averageRating": 5,
    "ratingsCount": 1,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.3.3.0.preview.1",
    "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
    },
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=I5nHBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=I5nHBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.co.uk/books?id=I5nHBAAAQBAJ&printsec=frontcover&dq=Harry+Potter&hl=&cd=1&source=gbs_api",
    "infoLink": "http://books.google.co.uk/books?id=I5nHBAAAQBAJ&dq=Harry+Potter&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Deathly_Hallows.html?hl=&id=I5nHBAAAQBAJ"
}

const AppLayout: React.FC = () => {
    const [query, setQuery] = useState('');
    const { isLoading, isSuccess, error, data, refetch } = useCustomQuery('searchBooks', () => searchVolumes(query));
  
    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
  
        if (!query) return;
        
        refetch();
    }
  
    
  return (
    <>
            <NavBar>
                <Search query={query} setQuery={setQuery} onSearch={handleSearch} />
                <NumOfResults numberOfBooks={data?.items.length || 0} />
            </NavBar>

            <MainContent>
                <Box>
                    {error && 'An error has occurred: ' + error.message}
                    {isLoading && <Loader />}
                    {isSuccess && <BooksList books={data.items} /> }
                </Box>

                <Box>
                    <BookFull book={book}/>
                </Box>
        </MainContent>
    </>
  )
};

export default AppLayout;
