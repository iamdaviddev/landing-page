import Image from "next/image";
import Link from "next/link";
import logoImg from "/public/logo.svg"
import { Button, DropdownMenu } from "@radix-ui/themes";

export function Header () {
  return (
    <div className="max-w-[1080px] m-auto flex items-center justify-between pt-8 mb-16">
      <div className="flex items-center gap-10">
        <div>
          <Image src={logoImg} alt="logotipo"/>
        </div>
        <nav className="flex items-center gap-8">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="outline-none">
              <Button variant="soft" className="flex items-center gap-2 text-gray-500 font-medium p-2">
                Features
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-gray-100 p-2 rounded-md text-zinc-500">
              <DropdownMenu.Item shortcut="⌘ E" className="flex gap-2 outline-none">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D" className="flex gap-2 outline-none">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N" className="flex gap-2 outline-none">Archive</DropdownMenu.Item>

              <DropdownMenu.Separator />
              <DropdownMenu.Item className="flex gap-2 outline-none">Share</DropdownMenu.Item>
              <DropdownMenu.Item className="flex gap-2 outline-none">Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ ⌫" className="flex gap-2 outline-none">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="outline-none">
              <Button variant="soft" className="flex items-center gap-2 text-gray-500 font-medium p-2">
                Options
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-gray-100 p-2 rounded-md text-zinc-500">
              <DropdownMenu.Item shortcut="⌘ E" className="flex gap-2 outline-none">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D" className="flex gap-2 outline-none">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N" className="flex gap-2 outline-none">Archive</DropdownMenu.Item>

              <DropdownMenu.Separator />
              <DropdownMenu.Item className="flex gap-2 outline-none">Share</DropdownMenu.Item>
              <DropdownMenu.Item className="flex gap-2 outline-none">Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ ⌫"className="flex gap-2 outline-none">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Link href="#" className="text-gray-500 font-medium">Careers</Link>
          <Link href="#" className="text-gray-500 font-medium">About</Link>
        </nav>
      </div>
      <div className="flex items-center justify-between gap-8">
        <Link href="#" className="text-gray-500 font-medium">
          Login
        </Link>
        <Link href="#" className="flex items-center justify-center w-24 h-8 border border-gray-500 p-4 rounded-md font-medium text-gray-500">
         Register
        </Link>
      </div>
    </div>
  )
}
