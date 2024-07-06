
import { useRecoilValue } from "recoil"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ShadcnCompoenent/ui/avatar"

import { Button } from "../ShadcnCompoenent/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/ShadcnCompoenent/ui/dropdown-menu"
import { userState } from "../store"
import { useNavigate } from "react-router-dom"

export default function UserNav() {
    const navigate = useNavigate()
    const user = useRecoilValue(userState)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          {user.username}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.username}</p>
            <p className="text-xs leading-none text-muted-foreground">
                {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
    
        <DropdownMenuItem onClick={()=>{
            navigate('/')
            window.location.reload();
           localStorage.clear()
        }}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}