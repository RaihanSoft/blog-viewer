import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Header() {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
            {/* Navigation Links */}
            <nav className="flex space-x-4">
                <div>
                    <Link href="/" className="text-white  hover:text-gray-300 transition duration-300">
                        Home
                    </Link>
                </div>
                <div>
                    <Link href="/profile" className="text-white hover:text-gray-300 transition duration-300">
                        Profile
                    </Link>
                </div>
            </nav>

            {/* Authentication Buttons */}
            <div className="flex space-x-4">
                {isUserAuthenticated ? (
                    <LogoutLink>
                        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                            Logout
                        </button>
                    </LogoutLink>
                ) : (
                    <>
                        <LoginLink>
                            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                                Login
                            </button>
                        </LoginLink>
                        <RegisterLink>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                                Register
                            </button>
                        </RegisterLink>
                    </>
                )}
            </div>
        </header>
    );
}
