import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


const ProfilePage = async () => {

  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  if (!isUserAuthenticated) {
    // Redirect to login page if not authenticated
    return (
      <div>
        <LoginLink />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to your profile!</h1>
      <p className="text-lg mb-4">This is your secure profile page.</p>
      <div className="flex">
        <div className=" p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-2">Your Details:</h2>
          <p>
            <strong>Email:</strong> {user?.email || "N/A"}
          </p>
          <p>
            <strong>Given Name:</strong> <strong>{user?.given_name || "N/A"}</strong>

            <strong>   {user?.family_name || "N/A"} </strong>

          </p>
          <p>
            <strong>Phone Number:</strong> {user?.phone_number || "N/A"}
          </p>

        </div>
        <div><img src={user?.picture} alt="" /></div>
      </div>
    </div>
  );
}
export default ProfilePage;