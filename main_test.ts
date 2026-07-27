import { assertEquals } from "@std/assert";
import { handler } from "./main.ts";

function assertHeaderLinksHome(html: string) {
  assertEquals(html.includes('href="/" aria-label="Go to homepage"'), true);
}

Deno.test("serves the home page", async () => {
  const response = await handler(new Request("http://localhost/"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
  assertEquals(html.includes("Tirna Chakraborty"), true);
  assertEquals(html.includes('href="/favicon.svg" rel="icon" type="image/svg+xml"'), true);
  assertEquals(html.includes('href="/site.css" rel="stylesheet"'), true);
  assertEquals(html.includes("Finance Analyst & Research Postgraduate"), true);
  assertEquals(html.includes("Analytical finance postgraduate from Massey University with over three years of NatWest Group experience"), true);
  assertEquals(html.includes("Analytical finance postgraduate at Massey University with over three years of NatWest Group experience"), false);
  assertEquals(html.includes("Analyst, Risk and Remediation"), true);
  assertEquals(html.includes("Open Analyst, Risk and Remediation experience page"), true);
  assertEquals(html.includes("Feb 2025 - Jul 2026"), true);
  assertEquals(html.includes("Open Massey University education page"), true);
  assertEquals(html.match(/Auckland, New Zealand/g)?.length, 1);
  assertEquals(html.indexOf("Auckland, New Zealand") > html.indexOf("Massey University</h3>"), true);
  assertEquals(html.includes("flex flex-wrap justify-between items-center gap-4"), true);
  assertEquals(html.includes("Corporate Finance / Investment Banking"), true);
  assertEquals(html.includes("Finance Research / Risk Analysis / Auckland"), false);
  assertEquals(html.includes('href="/experience">Experience'), true);
  assertEquals(html.includes('href="/skills">Skills'), true);
  assertEquals(html.includes("Open Analytics and Certifications certification page"), true);
  assertEquals(html.includes('href="/certifications">Certifications'), true);
  assertEquals(html.includes('href="/projects/whirlpool-fletcher-dcf"'), true);
  assertEquals(html.includes('href="/projects/economic-regime-research"'), true);
  assertEquals(html.includes(">Economic Regime Research</h3>"), true);
  assertEquals(html.includes('href="/projects/earnings-momentum-strategy"'), true);
  assertEquals(html.includes("https://mail.google.com/mail/?view=cm&fs=1&to=tirna.rcb%40gmail.com"), true);
  assertEquals(html.includes("Analytics & Certifications"), true);
});

Deno.test("serves the favicon", async () => {
  const response = await handler(new Request("http://localhost/favicon.svg"));
  const svg = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "image/svg+xml; charset=utf-8");
  assertEquals(svg.includes("<svg"), true);
  assertEquals(svg.includes("Tirna Chakraborty site icon"), true);
});

Deno.test("serves the shared stylesheet", async () => {
  const response = await handler(new Request("http://localhost/site.css"));
  const css = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/css; charset=utf-8");
  assertEquals(css.includes("--background-light: #f6f6f8"), true);
  assertEquals(css.includes(".layout-content-container"), true);
});

Deno.test("serves the education page", async () => {
  const response = await handler(new Request("http://localhost/education"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
  assertEquals(html.includes("Academic Foundations"), true);
  assertEquals(html.includes("Massey University - Te Kunenga ki Pūrehuroa"), true);
  assertEquals(html.includes("Master of Business Studies Finance (Research)"), true);
  assertEquals(html.includes("Massey University Investment Club"), true);
  assertEquals(html.includes("Institute of Hotel Management, Bangalore"), true);
  assertEquals(html.includes("Bachelor of Science in Hotel Management"), true);
});

Deno.test("serves the experience page", async () => {
  const response = await handler(new Request("http://localhost/experience"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
  assertEquals(html.includes("Experience"), true);
  assertEquals(html.includes("Analyst, Risk and Remediation"), true);
  assertEquals(html.includes("Financial Crime Analyst (Risk and Remediation)"), false);
  assertEquals(html.includes("Investigated complex financial crime cases including money laundering, terrorist financing, fraud, and bribery and corruption typologies"), true);
  assertEquals(html.includes("Assessed customer, product, geographic, and channel risk factors"), true);
  assertEquals(html.includes("Evaluated non-financial risk exposure across portfolios"), true);
  assertEquals(html.includes("Contributed to suspicious activity reporting processes"), true);
  assertEquals(html.includes("World-Check One, Equifax, and related tools"), true);
  assertEquals(html.includes("Supported system testing and threshold tuning"), true);
  assertEquals(html.includes("Ensured compliance with FCA, PRA, and global AML regulatory requirements"), true);
  assertEquals(html.includes("Analyzed large financial and customer datasets in Excel"), true);
  assertEquals(html.includes("Collaborated across legal, risk, compliance, operations, and technology teams"), true);
  assertEquals(html.includes("Analyzed high volume financial transaction and customer datasets"), false);
  assertEquals(html.includes("Anti-Money Laundering & Counter-Terrorist Financing"), true);
  assertEquals(html.includes("Customer Due Diligence & Transaction Monitoring"), true);
  assertEquals(html.includes("Strategic In-Life Remediation & Customer Due Diligence"), false);
  assertEquals(html.includes("Hospitality Graduate Trainee"), true);
  assertEquals(html.includes("Massey University Investment Club"), true);
  assertEquals(html.includes("Massey University Student Investment Fund"), true);
  assertEquals(html.includes("Executive Member"), true);
  assertEquals(html.includes("Served as an executive member, contributing to the running of the club and its investment process"), true);
  assertEquals(html.includes("Participated in finance and investment competitions representing the university"), true);
  assertEquals(html.includes("Helped organize club events, workshops, and speaker sessions"), true);
  assertEquals(html.includes("Supported and guided newer members joining the fund"), true);
  assertEquals(html.includes("Fund Manager"), true);
  assertEquals(html.includes("Managed a live fund worth NZD 50,000"), true);
  assertEquals(html.includes("Made quarterly buy, sell, and hold recommendations"), true);
  assertEquals(html.includes("Tracked portfolio performance against benchmarks"), true);
  assertEquals(html.includes("Monitored position sizing, sector exposure, and portfolio diversification"), true);
  assertEquals(html.includes("Reviewed and rebalanced holdings in line with the fund's investment mandate"), true);
  assertEquals(html.match(/Feb 2025 - Jul 2026/g)?.length, 2);
  assertEquals(html.includes("View Related Projects"), false);
  assertEquals(html.includes("supporting trade execution"), false);
});

Deno.test("serves the skills page", async () => {
  const response = await handler(new Request("http://localhost/skills"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
  assertEquals(html.includes("Skills Portfolio"), true);
  assertEquals(html.includes("PUBLISHED"), false);
  assertEquals(html.includes("SAVED"), false);
  assertEquals(html.includes("Technical Skills"), true);
  assertEquals(html.includes("Data & Analytics"), true);
  assertEquals(html.includes("Process Improvement"), true);
  assertEquals(html.includes("Risk Analysis"), true);
  assertEquals(html.includes("Personal Skills"), true);
  assertEquals(html.includes("Teamwork"), true);
  assertEquals(html.includes("Problem Solving"), true);
});

Deno.test("serves the projects page", async () => {
  const response = await handler(new Request("http://localhost/projects"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
  assertEquals(html.includes("Finance Project Archive"), true);
  assertEquals(html.includes("Whirlpool & Fletcher DCF Models"), true);
  assertEquals(html.includes('href="/projects/whirlpool-fletcher-dcf"'), true);
  assertEquals(html.includes("Strategic In-Life Remediation and Customer Due Diligence"), true);
  assertEquals(html.includes("NatWest Group / Risk Analytics"), true);
  assertEquals(html.includes("[ METHODS ]"), false);
  assertEquals(html.includes("[ OUTCOMES ]"), false);
  assertEquals(html.includes(">Economic Regime Research</h3>"), true);
  assertEquals(html.includes(">The Limits of Similarity-Based Macro-Regime Forecasting</h3>"), false);
  assertEquals(html.includes('aria-label="Open Economic Regime Research page"'), true);
  assertEquals(html.includes('href="/projects/economic-regime-research"'), true);
  assertEquals(html.includes("https://www.researchgate.net/publication/408536031_The_Limits_of_Similarity-Based_Macro-Regime_Forecasting_Evidence_from_Factors_Industry_Portfolios_and_Individual_Stocks"), true);
  assertEquals(html.includes("Read the full research"), true);
  assertEquals(html.includes("Earnings Momentum Strategy"), true);
  assertEquals(html.includes('href="/projects/earnings-momentum-strategy"'), true);
});

Deno.test("serves the Whirlpool and Fletcher DCF model page", async () => {
  const response = await handler(
    new Request("http://localhost/projects/whirlpool-fletcher-dcf"),
  );
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
  assertEquals(html.includes("Whirlpool & Fletcher DCF Models"), true);
  assertEquals(html.includes("Whirlpool Corporation - Stock Analysis Overview"), true);
  assertEquals(html.includes("Fletcher Building - Stock Analysis Overview"), true);
  assertEquals(html.includes("Minimal financial modelling dashboard with valuation tables"), false);
  assertEquals(html.includes("Fig 1. Valuation work combined"), false);
  assertEquals(html.includes("DCF, DDM and P/E multiple analysis"), true);
  assertEquals(html.includes("Framework Snapshot"), true);
});

Deno.test("serves the economic regime research page", async () => {
  const response = await handler(
    new Request("http://localhost/projects/economic-regime-research"),
  );
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
  assertEquals(html.includes(">The Limits of Similarity-Based Macro-Regime Forecasting</h1>"), true);
  assertEquals(html.includes("This paper examines whether similarity-based macro-regime forecasting"), true);
  assertEquals(html.includes("the six Fama–French factor portfolios"), true);
  assertEquals(html.includes("individual CRSP stocks over 1985 to 2024"), true);
  assertEquals(html.includes("approximately 13.40 percent in panel out-of-sample R²"), true);
  assertEquals(html.includes("surviving only under the Clark and West adjustment"), true);
  assertEquals(html.includes("observable characteristics explain less than one percent"), true);
  assertEquals(html.includes("the deterioration is structural rather than sample-specific"), true);
  assertEquals(html.includes("too coarse for individual-stock forecasting unless combined with firm-level information"), true);
  assertEquals(html.includes("https://www.researchgate.net/publication/408536031_The_Limits_of_Similarity-Based_Macro-Regime_Forecasting_Evidence_from_Factors_Industry_Portfolios_and_Individual_Stocks"), true);
  assertEquals(html.includes("Read the full research"), true);
  assertEquals(html.includes("This research project explores how changing macroeconomic conditions"), false);
});

Deno.test("serves the earnings momentum strategy page", async () => {
  const response = await handler(
    new Request("http://localhost/projects/earnings-momentum-strategy"),
  );
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
  assertEquals(html.includes("Earnings Momentum Strategy"), true);
  assertEquals(html.includes("composite EPS based momentum score"), true);
  assertEquals(html.includes("Methodology"), true);
  assertEquals(html.includes("Results"), true);
  assertEquals(html.includes("432.21%"), true);
  assertEquals(html.includes("Sharpe ratio of 0.88"), true);
  assertEquals(html.includes("Professional financial data visualization showing market depth and liquidity concentration."), false);
});

Deno.test("serves the certifications page", async () => {
  const response = await handler(new Request("http://localhost/certifications"));
  const html = await response.text();

  assertEquals(response.status, 200);
  assertEquals(response.headers.get("content-type"), "text/html; charset=utf-8");
  assertHeaderLinksHome(html);
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
