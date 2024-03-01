import { NextResponse } from "next/server";
import { users } from "@/app/ulti/db";

export function GET(_, response) {
  const { id } = response.params;
  const user = users.find((item) => item.id === id);
  return NextResponse.json({ user, code: '00' });
}

export async function POST(req, res) {
  let { name, email, password } = await req.json();
  const { id } = await res.params;

  const { name: uName, email: uEmail, password: uPassword } = users.find((u) => u.id === id);
  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({result: "Success"});
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "fill all input" })
  } else {
    return NextResponse.json({result: "Invalid Credentials"})
  }
}