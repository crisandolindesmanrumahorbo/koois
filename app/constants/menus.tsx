import IconPieChart from "../components/icons/IconPieChart";
import { Menu, RolePermission } from "../type";

export const menus = (role_permissions: RolePermission[]) => {
  return role_permissions
    .map((role_permission) => MENUS[role_permission?.name] ?? undefined)
    .filter((item) => item !== undefined);
};

const MENUS: { [key: string]: Menu } = {
  menu_user: {
    name: "Manage Users",
    url: "/users",
    icon: <IconPieChart />,
  },
  menu_create_quiz: {
    name: "Create Quiz",
    url: "/create-quiz",
    icon: <IconPieChart />,
  },
  menu_quiz: {
    name: "Quizzes",
    url: "/quizzes",
    icon: <IconPieChart />,
  },
};
