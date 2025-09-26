import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
import { useAuth } from "@/hooks/auth"


export default function Avatar() {
  const { session, signOut } = useAuth();
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          <img className="w-[35px] h-[35px] rounded-full ml-4 hover:cursor-pointer" src="/Kippie.webp" alt="Avatar" />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">{session && session.user.aud ? session.user.aud : "No email"}</DropdownItem>
        <DropdownItem key="copy">Settings</DropdownItem>
        <DropdownItem key="edit">Placeholder</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" onPress={signOut}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}