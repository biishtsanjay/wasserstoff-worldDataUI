import React from "react";
import SidebarData from "./SidebarData";
import { BiTrendingUp, BiCrown, BiBarChartAlt2 } from "react-icons/bi";
import ActiveNewUser from "./ActiveNewUser";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="div1 div">
        <p className="users">
          All Users <span>DETAIL</span>
        </p>
        <p className="total">12,875</p>
      </div>
      <div className="SidebarData">
        <SidebarData
          title="Total Earning"
          count="12,875"
          bg="#8676FF"
          icon={
            <BiTrendingUp
              size="25"
              color="white"
              style={{
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          }
        />
        <SidebarData
          title="Sales"
          count="1,12,875"
          bg="#66C8FF"
          icon={<BiCrown size="25" color="white" />}
        />
        <SidebarData
          title="Purchase"
          count="12,875"
          bg="#FF9066"
          icon={<BiBarChartAlt2 size="25" color="white" />}
        />
      </div>
      <div className="percentage-circle">
        <ActiveNewUser
          title="92,980"
          color="blue"
          user="Active Users"
          percentage="27%"
        />
        <ActiveNewUser
          title="22,652"
          color="green"
          user="New Users"
          percentage="67%"
        />
      </div>
    </div>
  );
};

export default Sidebar;
