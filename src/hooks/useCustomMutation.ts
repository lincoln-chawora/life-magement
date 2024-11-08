import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCustomMutation(mKey: string, mFn: (id: string) => Promise<any>) {
    const queryClient = useQueryClient();

    const {status, error, mutate} = useMutation({
        mutationKey: [mKey],
        mutationFn: mFn,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [mKey]
            });
        },
    })

    return {status, error, mutate}
}