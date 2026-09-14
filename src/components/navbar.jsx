import { UserRound } from "lucide-react";
import { Plus } from "lucide-react";

export default function Navbar({ userName }) {
  return (
    <div className="sm:flex sm:justify-between sm:items-center">
      <div className="text-xl sm:text-3xl font-bold">
        Welcome back, {userName}
      </div>
      <div className="flex justify-center items-center mt-8 gap-8 sm:m-0">
        <div className="flex gap-2 hover:bg-gray-200 px-4 py-2 rounded-full active:bg-gray-300">
          <Plus />
          <div>Create</div>
        </div>
        <div className="p-2 hover:bg-gray-200 active:bg-gray-300 rounded-full">
          <UserRound />
        </div>
      </div>
    </div>
  );
}
