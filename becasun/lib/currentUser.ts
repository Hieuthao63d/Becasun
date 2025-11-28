import { cookies } from "next/headers";
import { verifyToken } from "./verifyToken";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const payload = await verifyToken(token);
    return payload; 
  } catch (error) {
    console.error('Invalid token found in session:', error);
    return null;
  }
}