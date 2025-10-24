"use client";
import useGetUsers from "@/app/services/hooks/useGetUsers";

export default function Users() {
  const { isLoading, isFetching, users, refetch, isError } = useGetUsers();
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
      <table className="w-full border-collapse">
        <thead>
          <tr className="border border-gray-800">
            <th className="border border-gray-800 w-[20%]">Username</th>
            <th className="border border-gray-800 w-[20%]">Email</th>
            <th className="border border-gray-800 w-[20%]">Provider</th>
            <th className="border border-gray-800 w-[20%]">Role Id</th>
            <th className="border border-gray-800 w-[20%]">Created</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.user_id} className="text-center border">
              <td className="border border-gray-800">{user.username}</td>
              <td className="border border-gray-800">{user.email}</td>
              <td className="border border-gray-800">{user.provider}</td>
              <td className="border border-gray-800">{user.role_id}</td>
              <td className="border border-gray-800">{user.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
