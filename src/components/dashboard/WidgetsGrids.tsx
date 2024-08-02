import { SimpleWidget } from "./SimpleWidget";

export const WidgetsGrids = () => {
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget />
      <SimpleWidget />
    </div>
  );
};
