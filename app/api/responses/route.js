export async function POST(request) {
  const data = await request.json();

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbzNO2ap5H1jE9RuCRBVnJOc3uUtTsbC2G06FtgjJJxosZlwWJb8cvLv35vAFYcUHRWWKQ/exec";

  try {
    await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 500 });
  }
}