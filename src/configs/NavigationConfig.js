import {
  DashboardOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}/home`,
    title: "home",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "planner",
    path: `${APP_PREFIX_PATH}/planner`,
    title: "planner",
    icon: EditOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "clients",
    title: "clients",
    breadcrumb: false,
    submenu: [
      {
        key: "client-list",
        path: `${APP_PREFIX_PATH}/client-list`,
        title: "client list",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
