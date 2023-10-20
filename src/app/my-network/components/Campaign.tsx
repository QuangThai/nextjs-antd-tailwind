import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../utils/style.scss";

function Campaign() {
  return (
    <>
      <div className="flex items-center justify-between mt-7">
        <div className="title">Reward Campaign</div>
        <Link href="/see-more" className="link">
          See more(6)
        </Link>
      </div>

      <Link href="/reward-campaign/1">
        <Card bordered={false} className="reward">
          <Row>
            <Col span={12}>
              <Image
                className="reward-img"
                src="/my-network/reward1.png"
                width={150}
                height={150}
                alt="reward"
              />
            </Col>
            <Col span={12}>
              <div className="reward-content">
                <div className="reward-title">Halloween Haunt</div>
                <p className="reward-time">Time</p>
                <div className="reward-desc">Oct 5th - Oct 20th, 2023</div>
                <div className="reward-price">
                  <span>Price: </span>
                  <span>100 ETH</span>
                  <Image
                    src="/my-network/ethereum.png"
                    alt="ethereum"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Link>

      <Link href="/reward-campaign/1">
        <Card bordered={false} className="reward">
          <Row>
            <Col span={12}>
              <Image
                className="reward-img"
                src="/my-network/reward2.png"
                alt="reward"
              />
            </Col>
            <Col span={12}>
              <div className="reward-content">
                <div className="reward-title">Halloween Haunt</div>
                <p className="reward-time">Time</p>
                <div className="reward-desc">Oct 5th - Oct 20th, 2023</div>
                <div className="reward-price">
                  <span>Price: </span>
                  <span>100 ETH</span>
                  <Image
                    src="/my-network/polkadot.png"
                    alt="polkadot"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Link>
    </>
  );
}

export default Campaign;
