import { getServerSession } from "next-auth";
export const getUserSession = async () => await getServerSession();
