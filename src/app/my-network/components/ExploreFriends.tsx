"use client";
import { Card } from "antd";
import React from "react";

import { data } from "./PopularAvatar";
import Link from "next/link";
import ListItemAdvanced from "@/components/ListItemAdvaced";

function ExploreFriends() {
  return (
    <>
      <div className="my-network block">
        <div className="title">Explore Friends</div>
        <Link href="/see-more" className="link">
          See more(26)
        </Link>
      </div>

      <Card bordered={false} className="reward">
        <ListItemAdvanced data={data as any} />
      </Card>
    </>
  );
}

export default ExploreFriends;
