import { Tabs } from "antd";
import React, { useState } from "react";
import styles from "./Tab.module.scss";


type TabPosition = "left" | "right" | "top" | "bottom";

type TabProps = {
  items: any,
  type?: string,
  defaultActiveKey?: any,
  width?: number,
};

const Tab: React.FC<TabProps> = ({
  items = [],
  defaultActiveKey="1",
  width = 200,
  type = "card",
  ...otherProps
}) => {
  return (
    <div className={styles.tab_container}>
      <Tabs
        key={defaultActiveKey}
        tabPosition={"left"}
        defaultActiveKey={defaultActiveKey}
        items={items}
        tabBarStyle={{
          width,
          borderRight: "1px solid rgba(104, 112, 116, 0.31)",
        }}
        {...otherProps}
      />
    </div>
  );
};

export default Tab;
