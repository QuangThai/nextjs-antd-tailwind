"use client";

import { Col, Layout, Row, Space } from "antd";
import React from "react";

import ChatIcon from "@/icons/ChatIcon";
import MarketPlaceIcon from "@/icons/MarketplaceIcon";
import MenuAppIcon from "@/icons/MenuAppIcon";
import PersonIcon from "@/icons/PersonalIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";

import "./MobileLayout.css";
import { usePathname } from "next/navigation";

interface MobileLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: boolean;
}

function getClassName(isActive: boolean): string {
  return isActive ? 'active' : '';
}

function MobileLayout({ children, header, footer = true }: MobileLayoutProps) {
  const links = [
    {
      label: "My Profile",
      icon: PersonIcon,
      link: "/my-avatar",
    },
    {
      label: "My Network",
      icon: TwitterIcon,
      link: "/my-network",
    },
    {
      label: "Marketplace",
      icon: MarketPlaceIcon,
      link: "/marketplace",
    },
    {
      label: "Newsfeed",
      icon: MenuAppIcon,
      link: "/newsfeed",
    },
    {
      label: "Chat",
      icon: ChatIcon,
      link: "/messages",
    },
  ];

  const pathname = usePathname();

  return (
    <>
      <Layout
        className="mobile-layout"
      >
        <Space
          size={[32, 32]}
          direction="vertical"
          style={{ width: "100%", marginTop: 16 }}
        >
          {header === null ? null : header || <HeaderSearch />}
          <div className="main">{children}</div>
        </Space>
        {footer && (
          <div className="footer">
            <Row justify={"space-around"} style={{ height: 59 }}>
              {links.map((item) => (
                <Col key={item.label}>
                  <Link
                    className={`footer__icon ${pathname === item.link ? "active" : ""}`
                    }
                    href={item.link}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <item.icon />
                      {item.link === "/chat" && (
                        <span className="footer__noti"></span>
                      )}
                    </div>
                    <span>{item.label}</span>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Layout>
    </>
  );
}

export default MobileLayout;
