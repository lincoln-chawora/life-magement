import { useQuery } from "@tanstack/react-query";
import { getLoggedInUser } from "../services/apiAuth";

export function useUserQuery() {
    const {
        isLoading,
        isFetching,
        data: user,
        error
    } = useQuery({
        queryKey: ['user'],
        queryFn: getLoggedInUser
    });

    return {user, isLoading, error, isFetching, isAuthenticated: user?.role === 'authenticated'};
}