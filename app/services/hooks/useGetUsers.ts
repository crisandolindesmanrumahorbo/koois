import { useSuspenseQuery } from "@tanstack/react-query";

import { UserApi } from "../user-api";

export interface IGetUserResponse {
  username: string;
  user_id: number;
  email: string;
  provider: string;
  role_id: number;
  created_at: string;
}

const useGetUsers = () => {
  const {
    data = { data: [] },
    isLoading,
    isFetching,
    refetch,
    isError,
  } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: async () => UserApi.getUsers(),
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
