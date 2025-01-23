import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export default async function Header() {

    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            {/* Navigation Links */}
            <nav>
                <Link href="/" className="mr-4 text-white hover:underline">
                    Home
                </Link>
                <Link href="/profile" className="text-white hover:underline">
                    Profile
                </Link>
            </nav>

            {/* Authentication Buttons */}

            {(isUserAuthenticated ?

                <>
                    <div>
                        <LogoutLink>
                            <button
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                            >
                                Logout
                            </button>
                        </LogoutLink>
                    </div>
                </> :

                <>
                    <div>
                        <LoginLink>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                Login
                            </button>
                        </LoginLink>
                        <RegisterLink>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                Register
                            </button>
                        </RegisterLink>
                    </div>
                </>)}



        </header>
    );
}
