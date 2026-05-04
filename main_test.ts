import { assertEquals } from "@std/assert";
import { handler } from "./main.ts";

Deno.test("serves the curator profile page", async () => {
  const response = await handler(new Request("http://localhost/"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertEquals(html.includes("The Neutral Core"), true);
  assertEquals(html.includes("Curator Name"), true);
  assertEquals(html.includes("Certifications"), true);
  assertEquals(html.includes("The Architecture of Silence"), true);
  assertEquals(html.includes("Synthetic Intuition Models"), true);
});

Deno.test("returns 404 for other paths", async () => {
  const response = await handler(new Request("http://localhost/missing"));

  assertEquals(response.status, 404);
});
