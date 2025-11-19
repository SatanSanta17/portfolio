import { NextResponse } from "next/server";
import { validatePassword } from "../../../services/auth/validatePassword";

const COOKIE_NAME = "admin-auth";
const COOKIE_OPTIONS = {
  name: COOKIE_NAME,
  value:timestamp,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
  maxAge:undefined
  // No Expires or Max-Age - this makes it a session cookie (cleared on browser close)
};

/**
 * POST /api/admin/auth
 * Authenticates admin user and sets session cookie.
 * Request body: { password: string }
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { success: false, error: "Password is required" },
        { status: 400 }
      );
    }

    const isValid = validatePassword(password);

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 }
      );
    }

    // Set session cookie with current timestamp
    const timestamp = Date.now().toString();
    const response = NextResponse.json({ success: true });

    response.cookies.set(COOKIE_NAME, timestamp, COOKIE_OPTIONS);

    return response;
  } catch (error) {
    console.error("Auth API error:", error);

    // Handle missing ADMIN_PASSWORD env var
    if (error.message?.includes("ADMIN_PASSWORD")) {
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    );
  }
}

