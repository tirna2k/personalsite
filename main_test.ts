import { assertEquals } from "@std/assert";
import { handler } from "./main.ts";

Deno.test("serves the home page", async () => {
  const response = await handler(new Request("http://localhost/"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertEquals(html.includes("Tirna Chakraborty"), true);
  assertEquals(html.includes("Finance Analyst & Research Postgraduate"), true);
  assertEquals(html.includes("Financial Crime Analyst"), true);
  assertEquals(html.includes('href="/experience">Experience'), true);
  assertEquals(html.includes('href="/certifications">Certifications'), true);
  assertEquals(html.includes("Analytics & Certifications"), true);
});

Deno.test("serves the experience page", async () => {
  const response = await handler(new Request("http://localhost/experience"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertEquals(html.includes("Experience"), true);
  assertEquals(html.includes("Financial Crime Analyst (Risk and Remediation)"), true);
  assertEquals(html.includes("Anti-Money Laundering & Counter-Terrorist Financing"), true);
  assertEquals(html.includes("Customer Due Diligence & Transaction Monitoring"), true);
  assertEquals(html.includes("Strategic In-Life Remediation & Customer Due Diligence"), false);
  assertEquals(html.includes("Hospitality Graduate Trainee"), true);
  assertEquals(html.includes("Massey University Investment Club"), true);
  assertEquals(html.includes("Massey University Student Investment Fund"), true);
  assertEquals(html.includes("Fund Manager"), true);
  assertEquals(html.includes("View Related Projects"), false);
  assertEquals(html.includes("supporting trade execution"), true);
});

Deno.test("serves the projects page", async () => {
  const response = await handler(new Request("http://localhost/projects"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertEquals(html.includes("Finance Project Archive"), true);
  assertEquals(html.includes("Whirlpool & Fletcher DCF Models"), true);
  assertEquals(html.includes("Strategic In-Life Remediation and Customer Due Diligence"), true);
  assertEquals(html.includes("NatWest Group / Risk Analytics"), true);
  assertEquals(html.includes("[ METHODS ]"), false);
  assertEquals(html.includes("[ OUTCOMES ]"), false);
  assertEquals(html.includes("Economic Regime Classification"), true);
  assertEquals(html.includes("Earnings Momentum Strategy"), true);
});

Deno.test("serves the certifications page", async () => {
  const response = await handler(new Request("http://localhost/certifications"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertEquals(html.includes("Certification Portfolio"), true);
  assertEquals(html.includes("Bloomberg Certified"), true);
  assertEquals(html.includes("LSEG Certified"), true);
  assertEquals(html.includes("Xero Advisor Certification"), true);
  assertEquals(html.includes("SAP & SAS Analytics"), true);
  assertEquals(html.includes("Foundations of Risk and Asset Liability Management"), true);
  assertEquals(html.includes("McKinsey.org Forward Program"), true);
});

Deno.test("returns 404 for other paths", async () => {
  const response = await handler(new Request("http://localhost/missing"));

  assertEquals(response.status, 404);
});
