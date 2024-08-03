"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrids = () => {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${isCart}`}
        href="dashboard/counter"
        subTitle={"Productos agregados"}
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        label={"Contador"}
      />
    </div>
  );
};
