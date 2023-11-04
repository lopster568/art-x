import { LoginLink, RegisterLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import UserAccountNav from "./UserNav";
import { buttonVariants } from "./ui/button";
import MobileNav from "./MobNav";
const Navbar = () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    return (
        <nav className="sticky h-14 inset-x-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all" >
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200" >
                    <Link href="/" className="flex z-40 font-semibold">
                        <span>Art-x</span>
                    </Link>
                    {/* todo: Add mobile navbar */}
                    <MobileNav isAuth={!!user} />
                    <div className="hidden items-center space-x-4 sm:flex" >
                        {
                            !user ? (
                                <>
                                    <LoginLink
                                        className={`${buttonVariants({
                                            variant: 'ghost',
                                            size: 'sm',
                                        })}`}
                                    >Sign in</LoginLink>
                                    <RegisterLink
                                        className={`${buttonVariants({
                                            size: 'sm'
                                        })}`}
                                    >Get Started <ArrowRight className="ml-1.5 h-5 w-5" /> </RegisterLink>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href='/redeem-pay'
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            size: 'sm',
                                        })}>
                                        Redeem Payment
                                    </Link>
                                    <UserAccountNav
                                        name={
                                            !user.given_name || !user.family_name
                                                ? 'Your Account'
                                                : `${user.given_name} ${user.family_name}`
                                        }
                                        email={user.email ?? ''}
                                        imageUrl={user.picture ?? ''}
                                    />
                                </>
                            )
                        }
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );

}

export default Navbar;