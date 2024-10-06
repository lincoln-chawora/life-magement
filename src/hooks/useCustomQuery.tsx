import { useQuery } from "@tanstack/react-query";

export function useCustomQuery(qKey: string, qFn: () => Promise<any>) {

    const { status, fetchStatus, error, data, refetch } = useQuery({
        queryKey: [qKey],
        queryFn: qFn,
        enabled: false
    });

    return {status, fetchStatus, error, data, refetch}
}