"use client";

import { HeartFilled, MoreOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import Image from "next/image";
import React from "react";
import "./style.scss";

interface ListItemAdvancedProps {
  data: {
    title: string;
    avatar: string;
    top: string;
    link: string;
  }[];
  listProps?: any;
  listItemProps?: any;
  isRank?: boolean;
}

function ListItemAdvanced({
  data,
  listProps,
  listItemProps,
  isRank = false,
}: ListItemAdvancedProps) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      bordered={false}
      {...listProps}
      renderItem={(item: any, index) => (
        <List.Item
          className="list-advanced"
          actions={[
            <div key="list-loadmore-edit">
              <MoreOutlined />
            </div>,

            index % 2 === 0 ? (
              <Image
                src="/my-network/chat-icon.png"
                alt="chat"
                width={16}
                height={16}
              />
            ) : (
              []
            ),
          ]}
          {...listItemProps}
        >
          <List.Item.Meta
            avatar={
              <>
                {isRank && (
                  <Avatar
                    src={item.top}
                    size={20}
                    style={{ marginRight: "8px" }}
                  />
                )}
                <Avatar src={item.avatar} size={48} />
                <span
                  className={`list-advanced__level ${
                    isRank ? "list-advanced__level--rank" : ""
                  } `}
                >
                  Lv:22
                </span>
              </>
            }
            title={item.title}
            description={
              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={`list-advanced__like ${
                      index === 0 ? "list-advanced__like--active" : ""
                    }`}
                  >
                    <HeartFilled />
                    &nbsp;
                    <span>{index + 14}</span>
                  </div>
                  <div style={{ marginLeft: "10px" }}>Wearables (21)</div>
                </div>
                <div style={{ color: "#737373", fontSize: "10px" }}>
                  You liked each other
                </div>
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
}

export default ListItemAdvanced;
