"use client";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Dropdown, Input, Row, Space, Switch } from "antd";
import React from "react";

import Icon from "@ant-design/icons";



import { useRouter } from "next/navigation";
import DarkIcon from "@/icons/DarkIcon";
import SettingIcon from "@/icons/SettingIcon";
import AvatarCustom from "./AvatarCustom";
function HeaderSearch() {
  // const { darkMode, handleToggle } = useDarkMode();
 const router = useRouter();

  const menuitems = [
    {
      key: "1",
      label: (
        <Space size={12} align="center" className="menu-avatar">
          <Avatar className="avatar" size={40} src="/newsfeed/avatar.png">
            <UserOutlined />
          </Avatar>
          <span className="menu-avatar__name">Andrew Phung</span>
        </Space>
      ),
    },
    {
      key: "2",
      label: (
        <Space size={12} align="center" className="menu-item">
          <Icon component={SettingIcon} />
          <span>Setting</span>
        </Space>
      ),
    },
    {
      key: "3",
      label: (
        <Space size={12} align="center" className="menu-item">
          <Icon component={DarkIcon} />
          <span>Dark Mode</span>
          {/* <Switch onChange={handleToggle} checked={darkMode} /> */}
        </Space>
      ),
    },
  ];

  const onClick = ({ key }: { key: string }) => {
    if (key === "2") {
      router.push("/my-profile");
    }
  };

  return (
    <Row gutter={16} align={"middle"}>
      <Col style={{ flexGrow: 1 }}>
        <Input.Search
          placeholder="Search Here"
          size="large"
          className="search"
        />
      </Col>
      <Col style={{ flexShrink: 0 }}>
        <Dropdown
          className="menu"
          menu={{ items: menuitems, onClick }}
          placement="bottomRight"
          arrow
        >
          <AvatarCustom
            className="avatar"
            size={52}
            src="/newsfeed/avatar.png"
            level={12}
          >
            <UserOutlined />
          </AvatarCustom>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default HeaderSearch;
