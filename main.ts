const homePage = new URL("./index.html", import.meta.url);
const projectsPage = new URL("./projects.html", import.meta.url);
const certificationsPage = new URL("./certifications.html", import.meta.url);

export async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    const html = await Deno.readTextFile(homePage);

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  if (url.pathname === "/projects" || url.pathname === "/projects/") {
    const html = await Deno.readTextFile(projectsPage);

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  if (url.pathname === "/certifications" || url.pathname === "/certifications/") {
    const html = await Deno.readTextFile(certificationsPage);

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

    return new Response("Not Found", { status: 404 });
}

if (import.meta.main) {
  Deno.serve({ port: 8000 }, handler);
}
