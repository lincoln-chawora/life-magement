import React, { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useUserQuery } from "../hooks/useUserQuery";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const navigate = useNavigate();

    const {isAuthenticated, isLoading, isFetching } = useUserQuery();

    useEffect(() => {
        if (!isAuthenticated && !isLoading && !isFetching) navigate('/login');
    }, [isAuthenticated, isLoading, navigate, isFetching]);

    if (isLoading) return (
        <div>
            <Loader />
        </div>
    )

    if (isAuthenticated) return children;
};

export default ProtectedRoute;
