import { jwtVerify } from "jose";

export type JWTPayload = { 
    id: string; 
    email: string; 
    role: string; 
    name: string 
  };

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'dev-secret');

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, SECRET);
        return payload as JWTPayload;
    } catch (error) {
        console.error('JWT verification error:', error);
        throw error;
    }
}