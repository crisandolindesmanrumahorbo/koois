import { useSuspenseQuery } from "@tanstack/react-query";

import { UserApi } from "../user-api";

const useGetUsers = (token: string) => {
  const {
    data = { data: [] },
    isLoading,
    isFetching,
    refetch,
  } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => UserApi.getUsers(token),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const users = (data || []) as Array<unknown>;

  return {
    users,
    isLoading,
    isFetching,
    refetch,
  };
};

export default useGetUsers;
