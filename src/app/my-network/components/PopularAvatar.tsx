"use client";

import ListItemAdvanced from "@/components/ListItemAdvaced";
import { Card } from "antd";
import Link from "next/link";

export const data = [
  {
    title: "Jim Lawrence",
    avatar: "/my-network/avatar1.png",
    top: "/my-network/top1.png",
  },
  {
    title: "Joshua Middleton",
    avatar: "/my-network/avatar2.png",
    top: "/my-network/top2.png",
  },
  {
    title: "Joshua Middleton",
    avatar: "/my-network/avatar3.png",
    top: "/my-network/top3.png",
  },
  {
    title: "Paul Goldstein",
    avatar: "/my-network/avatar4.png",
    top: "/my-network/top4.png",
  },
] as {
  title: string;
  avatar: string;
  top: string;
}[];

function PopularAvatar() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="font-bold">Top Popular Avatar</div>
        <Link href="/see-more" className="link">
          See more(6)
        </Link>
      </div>

      <Card bordered={false} className="reward">
        <ListItemAdvanced data={data as any} isRank />
      </Card>
    </>
  );
}

export default PopularAvatar;
