import { IconLogout2, IconUser, IconUsersPlus, IconPlus, IconPencil, IconTrash } from "@tabler/icons-react";
import { rolesData } from "../../../Mock/roles-data";

function RoleCard({ no, role }) {
  return (
    <div className="grid grid-cols-3 items-center border-b border-gray-200 py-2 px-4 text-[14.5px]">
      <div>{no}</div>
      <div>{role}</div>
      <div className="flex gap-2">
        <button className="text-gray-600">
          <IconPencil/>
        </button>
        <button className="text-gray-600">
          <IconTrash/>
        </button>
      </div>
    </div>
  );
}

export default function RolesPage() {
  return (
    <section id="container" className="flex h-screen justify-center relative">

      <section id="navigation" className="bg-white w-[15%] border-r border-gray-300 p-4">
        <h1 className="text-[30px] mb-5 font-sans font-bold text-center">Connect</h1>
        <div className="nav-buttons flex flex-col items-center gap-4 p-2 w-full mb-2 font-bold text-[18px]">
          <button className="rounded-[10px] flex items-center gap-2 py-2 px-3 w-[90%]">
            <IconUser /> User
          </button>
          <button className="flex items-center gap-2 py-2 px-3 bg-black text-white border border-gray-300 cursor-pointer w-[90%]">
            <IconUsersPlus /> Hak Akses
          </button>
          <button className="flex items-center gap-2 py-2 px-3 w-[90%]">
            <IconLogout2 /> Logout
          </button>
        </div>
      </section>

      <section id="content" className="bg-white w-[85%] p-5">
        <input
          placeholder="Cari Hak Akses"
          className="flex w-[98%] h-[5vh] mb-5 p-4 text-[14.5px] border border-gray-300 rounded-[7px]"
        />

        <div className="grid grid-cols-3 font-semibold border-b border-gray-300 py-2 px-4 text-left text-[15px]">
          <div>No</div>
          <div>Hak Akses</div>
          <div>Action</div>
        </div>

        {rolesData.map((role, index) => (
          <RoleCard
            key={index}
            no={index + 1}
            role={role.role}
          />
        ))}
      </section>

      <button className="absolute bottom-10 right-6 bg-gray-300 hover:bg-gray-100 text-xl w-15 h-10 rounded flex items-center justify-center">
        <IconPlus />
      </button>
    </section>
  );
}
