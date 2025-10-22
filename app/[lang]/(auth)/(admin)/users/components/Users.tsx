"use client";
import useGetUsers from "@/app/services/hooks/useGetUsers";

export default function Users({ token }: { token?: string }) {
  const { isLoading, isFetching, users, refetch, isError } = useGetUsers(
    token ?? "",
  );
  if (isLoading || isFetching) return <p>Loading...</p>;
  if (isError)
    return (
      <>
        <p>Error...</p>
        <button onClick={() => refetch()}>Refetch</button>
      </>
    );

  return (
    <div>
      <button onClick={() => refetch()}>Refetch</button>
      <ul>
        {users.map((user) => (
          <li className="dark:text-white text-black" key={user.user_id}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
