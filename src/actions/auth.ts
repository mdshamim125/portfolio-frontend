"use server";
import { FieldValues } from "react-hook-form";

export const login = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(responseData.message || "Login failed");
    }

    return responseData;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

export const getMe = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/getMe`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      return null; 
    }

    return await res.json();
  } catch (err) {
    console.error("getMe error:", err);
    return null;
  }
};
