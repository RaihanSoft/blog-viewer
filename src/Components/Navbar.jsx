import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavClient from "../Components/NavClient";

export default async function Header() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <NavClient isUserAuthenticated={isUserAuthenticated} />
  );
}
