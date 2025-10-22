import { useSuspenseQuery } from "@tanstack/react-query";

import { UserApi } from "../user-api";

export interface IGetUserResponse {
  username: string;
  user_id: number;
  email: string;
}

const useGetUsers = (token: string) => {
  const {
    data = { data: [] },
    isLoading,
    isFetching,
    refetch,
    isError,
  } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => UserApi.getUsers(token),
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const users = (data || []) as Array<IGetUserResponse>;

  return {
    users,
    isLoading,
    isFetching,
    refetch,
    isError,
  };
};

export default useGetUsers;
