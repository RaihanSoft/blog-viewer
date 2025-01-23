import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

const ProfilePage = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">Welcome to your profile!</h1>
      <p className="text-lg mb-4">This is your secure profile page.</p>
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          className="p-4 rounded shadow-md bg-white"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-2">Your Details:</h2>
          <p>
            <strong>Email:</strong> {user?.email || "N/A"}
          </p>
          <p>
            <strong>Given Name:</strong> {user?.given_name || "N/A"} {user?.family_name || "N/A"}
          </p>
          <p>
            <strong>Phone Number:</strong> {user?.phone_number || "N/A"}
          </p>
        </motion.div>
        <motion.div
          className="mt-4 md:mt-0 md:ml-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={user?.picture}
            alt="Profile"
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;