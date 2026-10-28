import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const subject = String(body.subject ?? "Project inquiry").trim().slice(0, 200) || "Project inquiry";
    const message = String(body.message ?? "").trim();

    if (name.length < 2) return NextResponse.json({ error: "Please include your name." }, { status: 400 });
    if (!isEmail(email)) return NextResponse.json({ error: "Please include a valid email." }, { status: 400 });
    if (message.length < 10) return NextResponse.json({ error: "Message is too short — add a little detail." }, { status: 400 });
    if (message.length > 5000) return NextResponse.json({ error: "Message is too long (max 5000 characters)." }, { status: 400 });

    const [row] = await db.insert(contactMessages).values({ name: name.slice(0, 120), email: email.slice(0, 200), subject, message }).returning({ id: contactMessages.id });
    return NextResponse.json({ ok: true, id: row?.id ?? null });
  } catch (e) {
    console.error("contact POST failed", e);
    return NextResponse.json({ error: "Couldn't save your message right now. Email ankitsingh110198@gmail.com directly." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, usage: "POST { name, email, subject, message }" });
}
