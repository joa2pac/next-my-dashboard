import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="text-3xl mt-2">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
}
