import { NextResponse } from "next/server";
import { users } from "@/app/ulti/db";
import fs from 'fs';

export function GET() {
  return NextResponse.json({result: users}, {status: 404});
}

export async function POST(req, res) {
  let { name, age, email, password  } = await req.json();
  if(!name || !age || !email || !password) {
    return NextResponse.json({ message: "required" })
  } else {
    const test = users.find((x) => x.name === name || x.email === email);
    if(test) {
      return NextResponse.json({ message: "đã tồn tại tài khoản" })
    } else {
      users.push({
        id: users.length + 1,
        name,
        age,
        email,
        password
      });
      const updateUsers = users;
      const data = JSON.stringify(updateUsers, null, 2);
      fs.writeFileSync('./app/ulti/db.js', `export const users = ${data};`, 'utf-8')
      return NextResponse.json({ result: "Create successfully", code: '00' })
    }
  }
}