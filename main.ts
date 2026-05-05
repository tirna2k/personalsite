const homePage = new URL("./index.html", import.meta.url);
const educationPage = new URL("./education.html", import.meta.url);
const experiencePage = new URL("./experience.html", import.meta.url);
const projectsPage = new URL("./projects.html", import.meta.url);
const skillsPage = new URL("./skills.html", import.meta.url);
const certificationsPage = new URL("./certifications.html", import.meta.url);
const valuationPage = new URL("./valuation.html", import.meta.url);
const regimePage = new URL("./regime.html", import.meta.url);
const momentumPage = new URL("./momentum.html", import.meta.url);

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

  if (url.pathname === "/education" || url.pathname === "/education/") {
    const html = await Deno.readTextFile(educationPage);

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

  if (
    url.pathname === "/projects/whirlpool-fletcher-dcf" ||
    url.pathname === "/projects/whirlpool-fletcher-dcf/"
  ) {
    const html = await Deno.readTextFile(valuationPage);

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  if (
    url.pathname === "/projects/economic-regime-research" ||
    url.pathname === "/projects/economic-regime-research/"
  ) {
    const html = await Deno.readTextFile(regimePage);

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  if (
    url.pathname === "/projects/earnings-momentum-strategy" ||
    url.pathname === "/projects/earnings-momentum-strategy/"
  ) {
    const html = await Deno.readTextFile(momentumPage);

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  if (url.pathname === "/experience" || url.pathname === "/experience/") {
    const html = await Deno.readTextFile(experiencePage);

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  if (url.pathname === "/skills" || url.pathname === "/skills/") {
    const html = await Deno.readTextFile(skillsPage);

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
