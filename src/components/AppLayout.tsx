import React from "react"
import MainContent from "./MainContent";
import NavBar from "./NavBar";
import Search from "./Search";
import { NumOfResults } from "./NumOfResults";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {  
  return (
    <>
            <NavBar>
                <Search />
                <NumOfResults />
            </NavBar>

            <MainContent>
                <Outlet />
            </MainContent>
    </>
  )
};

export default AppLayout;
