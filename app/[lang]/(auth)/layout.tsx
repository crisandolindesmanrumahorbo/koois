import NavbarSidebar from "@/app/components/NavbarSidebar";
import { getTokenCookies, getUser } from "@/app/utils/cookies";

type Props = {
  children: React.ReactNode;
};

export type RolePermission = {
  name: string;
};

export default async function Layout(props: Props) {
  const { children } = props;
  const token = await getTokenCookies();
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  const response = await fetch(
    `${process.env.BASE_URL}/protected/user/role-permissions`,
    {
      method: "GET",
      headers: headers,
      cache: "no-store",
    },
  );
  let role_permissions;
  try {
    const data = await response.json();
    role_permissions = data;
  } catch (e) {
    console.log(e);
  }
  const user_cookies = await getUser();
  const user = {
    role_id: user_cookies.role_id,
    role_permissions: role_permissions,
  };

  return <NavbarSidebar user={user}>{children}</NavbarSidebar>;
}
