import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import Image from 'next/image'
import Link from 'next/link'
import { LogoutLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

interface UserAccountNavProps {
    email: string | undefined
    name: string
    imageUrl: string
}

const UserAccountNav = async ({
    email,
    imageUrl,
    name,
}: UserAccountNavProps) => {
    const { getPermission } = getKindeServerSession();
    const isAdmin = getPermission("admin").isGranted

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                className='overflow-visible'>
                <Button className='rounded-full h-8 w-8 aspect-square bg-slate-400'>
                    <Avatar className='relative w-8 h-8'>
                        {imageUrl ? (
                            <div className='relative aspect-square h-full w-full'>
                                <Image
                                    fill
                                    src={imageUrl}
                                    alt='profile picture'
                                    referrerPolicy='no-referrer'
                                />
                            </div>
                        ) : (
                            <AvatarFallback>
                                <span className='sr-only'>{name}</span>
                                {/* <Icons.user className='h-4 w-4 text-zinc-900' /> */}
                            </AvatarFallback>
                        )}
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-white' align='end'>
                <div className='flex items-center justify-start gap-2 p-2'>
                    <div className='flex flex-col space-y-0.5 leading-none'>
                        {name && (
                            <p className='font-medium text-sm text-black'>
                                {name}
                            </p>
                        )}
                        {email && (
                            <p className='w-[200px] truncate text-xs text-zinc-700'>
                                {email}
                            </p>
                        )}
                    </div>
                </div>

                <DropdownMenuSeparator />

                {
                    (isAdmin) ? (
                        <>
                            <DropdownMenuItem asChild>
                                <Link href='/admin'>Admin Dashboard</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </>
                    ) : null
                }

                <DropdownMenuItem asChild>
                    <Link href='/transactions'>My Transactions</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <LogoutLink>
                    <DropdownMenuItem className='cursor-pointer'>
                        Log out
                    </DropdownMenuItem>
                </LogoutLink>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountNav