import React from "react";
import Socials from "../components/stats/Socials";
import Grid from "../components/stats/Grid";
import UserPieChart from "../components/stats/UserPieChart";
import PackagePieChart from "../components/stats/PackagePieChart";
import RevenueChart from "../components/stats/RevenueChart";

export default function Overview() {
  return (
    <div className="flex flex-col gap-4">
      <Grid />
      <div className="flex gap-4">
        <RevenueChart />
        <UserPieChart />
        <PackagePieChart />
      </div>
      <div className="flex flex-row gap-4 w-full justify-left">
        <Socials />
      </div>
    </div>
  );
}
