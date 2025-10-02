import { getServerSession } from "next-auth/next";
import { authOptions } from "./authOptions";

export const getUserSession = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session?.user); // { id, name, email, image }
  return session;
};
