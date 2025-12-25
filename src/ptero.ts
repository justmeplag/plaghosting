import fetch from "node-fetch";

const base = () => `${process.env.PANEL_URL}/api/application`;
const headers = () => ({
  "Authorization": `Bearer ${process.env.PTERO_API_KEY}`,
  "Content-Type": "application/json",
  "Accept": "application/json"
});

export async function ptero(path: string, method = "GET", body?: any) {
  const res = await fetch(base() + path, {
    method,
    headers: headers(),
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Ptero ${method} ${path} failed: ${text}`);
  }
  return res.json();
}