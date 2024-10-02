import { useQuery } from "@tanstack/react-query";

export function useCustomQuery(qKey: string, qFn: () => Promise<any>) {
    const { isLoading, isSuccess, error, data, refetch } = useQuery({
        queryKey: [qKey],
        queryFn: qFn,
        enabled: false
    });

    return {isLoading, isSuccess, error, data, refetch}
}