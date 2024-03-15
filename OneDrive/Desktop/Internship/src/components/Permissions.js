import React from "react";
import PermissionsCard from "./PermissionsCard";
import { DATA1,DATA2 } from "../utils/Constant";
const Permissions = () => {
  return (
    <div className="w-full ">
      <div className="m-4 ">
        <h1 className="text-xl font-semibold">Permissions</h1>
      </div>
      <div className="flex">
      <div className="">
      {DATA1.map((item) => {
        return <PermissionsCard title={item.title} items={item.items} />;
      })}
      </div>
      <div className="">
      {DATA2.map((item) => {
        return <PermissionsCard title={item.title} items={item.items} />;
      })}
      </div>
      </div>
      
      
    </div>
  );
};

export default Permissions;
