import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";

export default function Avatar() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button>
          <img className="w-[35px] h-[35px] rounded-full mr-2 hover:cursor-pointer" src="/Kippie.webp" alt="Avatar" />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Kippie</DropdownItem>
        <DropdownItem key="copy">Settings</DropdownItem>
        <DropdownItem key="edit">Placeholder</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}