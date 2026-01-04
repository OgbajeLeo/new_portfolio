/**
 * Structured Data (JSON-LD) utility for SEO
 * Generates schema.org structured data for better search engine understanding
 */

export interface StructuredDataConfig {
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  authorName: string;
  authorJobTitle: string;
  authorImage: string;
  authorDescription?: string;
  authorSameAs?: string[]; // Social media profiles
}

const defaultConfig: StructuredDataConfig = {
  siteUrl: "https://ogbaje1.vercel.app",
  siteName: "OGBAJE LEO | Frontend Developer",
  siteDescription:
    "Explore the portfolio of Ogbaje Leo Arome, a frontend developer with expertise in React, Next.js, Vue, and other JavaScript frameworks.",
  authorName: "Ogbaje Leo Arome",
  authorJobTitle: "Frontend Developer",
  authorImage: "https://avatars.githubusercontent.com/u/47216075?v=4",
  authorDescription:
    "A highly committed, consistent, and resilient individual with a drive to create exceptional user experiences through the use of HTML, CSS, Javascript, ReactJs, VueJs, and other technologies.",
  authorSameAs: [
    "https://github.com/ogbaje1",
    "https://www.linkedin.com/in/ogbajeleo",
  ],
};

/**
 * Remove existing JSON-LD scripts from the document
 */
export function removeStructuredData(): void {
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"]'
  );
  existingScripts.forEach((script) => script.remove());
}

/**
 * Add JSON-LD structured data script to the document head
 */
export function addStructuredData(jsonLd: object): void {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

/**
 * Generate Person schema (for the developer/author)
 */
export function generatePersonSchema(
  config: StructuredDataConfig = defaultConfig
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.authorName,
    jobTitle: config.authorJobTitle,
    image: config.authorImage,
    description: config.authorDescription || config.siteDescription,
    url: config.siteUrl,
  };

  if (config.authorSameAs && config.authorSameAs.length > 0) {
    schema.sameAs = config.authorSameAs;
  }

  return schema;
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema(
  config: StructuredDataConfig = defaultConfig,
  currentPath: string = "/"
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.siteName,
    description: config.siteDescription,
    url: config.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${config.siteUrl}/projects?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  config: StructuredDataConfig = defaultConfig,
  path: string,
  pathname: string
) {
  const pathSegments = path.split("/").filter((segment) => segment);
  const baseUrl = config.siteUrl;

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
  ];

  let currentUrl = baseUrl;
  pathSegments.forEach((segment, index) => {
    currentUrl += `/${segment}`;
    const name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    breadcrumbItems.push({
      "@type": "ListItem",
      position: index + 2,
      name: name,
      item: currentUrl,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };
}

/**
 * Generate WebPage schema for specific pages
 */
export function generateWebPageSchema(
  config: StructuredDataConfig = defaultConfig,
  title: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    image: image || config.authorImage,
    author: {
      "@type": "Person",
      name: config.authorName,
    },
    publisher: {
      "@type": "Person",
      name: config.authorName,
      image: config.authorImage,
    },
  };
}

/**
 * Generate Portfolio/CreativeWork schema for projects page
 */
export function generatePortfolioSchema(
  config: StructuredDataConfig = defaultConfig
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${config.siteUrl}/projects`,
    name: "Projects Portfolio",
    description:
      "Browse through a collection of projects showcasing my expertise and technical skills.",
    creator: {
      "@type": "Person",
      name: config.authorName,
    },
    url: `${config.siteUrl}/projects`,
  };
}

/**
 * Initialize structured data for a route
 */
export function initializeStructuredData(
  routePath: string,
  routeMeta: any,
  config: StructuredDataConfig = defaultConfig
) {
  // Remove existing structured data
  removeStructuredData();

  const fullUrl = `${config.siteUrl}${routePath === "/" ? "" : routePath}`;
  const title = routeMeta.title || config.siteName;
  const description = routeMeta.description || config.siteDescription;
  const image = routeMeta.image || config.authorImage;

  // Always add Person schema (author information)
  addStructuredData(generatePersonSchema(config));

  // Always add WebSite schema
  addStructuredData(generateWebSiteSchema(config, routePath));

  // Add WebPage schema for the current page
  addStructuredData(
    generateWebPageSchema(config, title, description, fullUrl, image)
  );

  // Add BreadcrumbList for non-home pages
  if (routePath !== "/") {
    addStructuredData(generateBreadcrumbSchema(config, routePath, routePath));
  }

  // Add specific schema for projects page
  if (routePath === "/projects") {
    addStructuredData(generatePortfolioSchema(config));
  }
}

