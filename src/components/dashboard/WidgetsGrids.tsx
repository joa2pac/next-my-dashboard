import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";

export const WidgetsGrids = () => {
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={"Titulo 1"}
        href="dashboard/counter"
        subTitle="subtitle"
        icon={<IoCafeOutline size={50} className="text-blue-500" />}
        label="Label 1"
      />
    </div>
  );
};
