import React, { useEffect, useState } from "react";
import { Card, Table, Tooltip, message, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { fetchUsers } from "redux/actions/User";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import Loading from "components/shared-components/Loading";

const UserList = () => {
  const [usersList, setUserList] = useState([]);
  const { users, isLoading } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const deleteUser = (userId) => {
    setUserList(usersList.filter((item) => item.id !== userId));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
    setTimeout(() => message.destroy(), 1000);
  };

  const tableColumns = [
    {
      title: "User",
      dataIndex: "name",
      render: (_, record) => (
        <div
          onClick={() =>
            history.push(`${APP_PREFIX_PATH}/setting/${record.id}`)
          }
          className="d-flex"
        >
          <AvatarStatus
            src={record.img}
            name={record.name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: {
        compare: (a, b) => a.phone.length - b.phone.length,
      },
    },
    {
      title: "City",
      dataIndex: "city",
      render: (_, record) => (
        <div className="d-flex">{record.address.city}</div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.address.city.toLowerCase();
          b = b.address.city.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Company",
      dataIndex: "company",
      render: (_, record) => (
        <div className="d-flex">{record.company.name}</div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.company.name.toLowerCase();
          b = b.company.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Website",
      dataIndex: "website",
      render: (_, record) => <div className="d-flex">{record.website}</div>,
      sorter: {
        compare: (a, b) => {
          a = a.website.toLowerCase();
          b = b.website.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteUser(elm.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  if (isLoading) return <Loading />;
  return (
    <Card bodyStyle={{ padding: "0px" }}>
      <Table columns={tableColumns} dataSource={usersList} rowKey="id" />
    </Card>
  );
};

export default UserList;
