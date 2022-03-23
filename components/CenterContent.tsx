import React, { ReactChild, ReactChildren } from "react";
// antd
import { Layout } from "antd";
const { Content } = Layout;
interface IProps {
  children: ReactChild | ReactChildren;
  padding?: number;
  marginTop?: number;
}
export default function CenterContent({ children, padding, marginTop }: IProps) {
  return (
    <Content
      className="site-layout"
      style={{
        padding: `0 ${padding ?? 25}%`,
        marginTop: `${marginTop ?? 50}`,
        position: "relative",
      }}
    >
      {children}
    </Content>
  );
}
