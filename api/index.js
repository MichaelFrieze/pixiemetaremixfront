var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MO25Y7PD.css";

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/root.jsx
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  },
  { rel: "icon", href: "/favicon.png" }
];
var meta = () => ({
  charset: "utf-8",
  title: "Pixie Meta",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "font-sans"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/routes/blog/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => BlogPost
});

// app/components/header.jsx
var import_react3 = require("@remix-run/react");
var Header = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "container mx-auto mt-10 px-6 text-center h-40 md:h-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10"
  }, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/",
    prefetch: "intent",
    className: "hover:text-accentCyan"
  }, "Home"), /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/blog",
    prefetch: "intent",
    className: "hover:text-accentCyan"
  }, "Blog"), /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/team",
    prefetch: "intent",
    className: "hover:text-accentCyan"
  }, "Team")));
};

// app/components/layout.jsx
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-6 text-center md:pt-20 pb-52"
  }, children));
};

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/routes/blog/$slug.jsx
function BlogPost() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative py-16 bg-white overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative h-full text-lg max-w-prose mx-auto",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "absolute top-12 left-full transform translate-x-32",
    width: "404",
    height: "384",
    fill: "none",
    viewBox: "0 0 404 384"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "74b3fd99-0a6f-4271-bef2-e80eeafdf357",
    x: "0",
    y: "0",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4",
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: "404",
    height: "384",
    fill: "url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
  })), /* @__PURE__ */ React.createElement("svg", {
    className: "absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32",
    width: "404",
    height: "384",
    fill: "none",
    viewBox: "0 0 404 384"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "f210dbf6-a58d-4871-961e-36d5016a0f49",
    x: "0",
    y: "0",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4",
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: "404",
    height: "384",
    fill: "url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
  })), /* @__PURE__ */ React.createElement("svg", {
    className: "absolute bottom-12 left-full transform translate-x-32",
    width: "404",
    height: "384",
    fill: "none",
    viewBox: "0 0 404 384"
  }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("pattern", {
    id: "d3eb07ae-5182-43e6-857d-35c643af9034",
    x: "0",
    y: "0",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4",
    className: "text-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React.createElement("rect", {
    width: "404",
    height: "384",
    fill: "url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "relative px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-lg max-w-prose mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("span", {
    className: "block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase"
  }, "Introducing"), /* @__PURE__ */ React.createElement("span", {
    className: "mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, "JavaScript for Beginners")), /* @__PURE__ */ React.createElement("p", {
    className: "mt-8 text-xl text-gray-500 leading-8"
  }, "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"
  }, /* @__PURE__ */ React.createElement("p", null, "Faucibus commodo massa rhoncus, volutpat.", " ", /* @__PURE__ */ React.createElement("strong", null, "Dignissim"), " sed ", /* @__PURE__ */ React.createElement("strong", null, "eget risus enim"), ". Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Mattis mauris semper"), " sed amet vitae sed turpis id."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Quis elit egestas venenatis mattis dignissim."), /* @__PURE__ */ React.createElement("li", null, "Cras cras lobortis vitae vivamus ultricies facilisis tempus."), /* @__PURE__ */ React.createElement("li", null, "Orci in sit morbi dignissim metus diam arcu pretium.")), /* @__PURE__ */ React.createElement("p", null, "Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim."), /* @__PURE__ */ React.createElement("h2", null, "From beginner to expert in 30 days"), /* @__PURE__ */ React.createElement("p", null, "Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam."), /* @__PURE__ */ React.createElement("blockquote", null, /* @__PURE__ */ React.createElement("p", null, "Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.")), /* @__PURE__ */ React.createElement("p", null, "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit."), /* @__PURE__ */ React.createElement("figure", null, /* @__PURE__ */ React.createElement("figcaption", null, "Sagittis scelerisque nulla cursus in enim consectetur quam.")), /* @__PURE__ */ React.createElement("h2", null, "Everything you need to get up and running"), /* @__PURE__ */ React.createElement("p", null, "Purus morbi dignissim senectus mattis ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "adipiscing"), ". Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam."), /* @__PURE__ */ React.createElement("p", null, "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit."))))));
}

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/routes/blog/index.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogIndex,
  loader: () => loader
});
var import_react5 = require("@remix-run/react");

// app/components/blog-post-card.jsx
var import_react4 = require("@remix-run/react");
var BlogPostCard = ({ blogPost }) => {
  var _a, _b, _c, _d, _e, _f;
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col rounded-lg shadow-lg overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, ((_e = (_d = (_c = (_b = (_a = blogPost.attributes.image) == null ? void 0 : _a.data) == null ? void 0 : _b[0].attributes) == null ? void 0 : _c.formats) == null ? void 0 : _d.medium) == null ? void 0 : _e.url) && /* @__PURE__ */ React.createElement("img", {
    className: "h-48 w-full object-cover",
    srcSet: (_f = blogPost.attributes.image.data) == null ? void 0 : _f[0].attributes.formats.medium.url,
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 bg-white p-6 flex flex-col justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm font-medium text-indigo-600"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/blog/dynamicroute",
    className: "hover:underline"
  }, "Article")), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/blog/dynamicroute",
    className: "block mt-2"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xl font-semibold text-gray-900"
  }, blogPost.attributes.title), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-base text-gray-500"
  }, blogPost.attributes.subtitle)))));
};

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/routes/blog/index.jsx
var loader = async ({ request }) => {
  const res = await fetch(`${process.env.API_URL}/api/blog-posts?populate=image`);
  if (!res.ok) {
    console.error(res);
    const resObj2 = await res.json();
    throw new Error(`${resObj2.error.status} | ${resObj2.error.name} | Message: ${resObj2.error.message} | Details: ${JSON.stringify(resObj2.error.details)}`);
  }
  const resObj = await res.json();
  const loaderData = resObj.data;
  return loaderData;
};
function BlogIndex() {
  const loaderData = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white h-1/3 sm:h-2/3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative max-w-7xl mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
  }, "From the blog"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
  }, loaderData.map((blogPost) => /* @__PURE__ */ React.createElement(BlogPostCard, {
    key: blogPost.id,
    blogPost
  })))))));
}

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, "Index Route")));
}

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/routes/team.jsx
var team_exports = {};
__export(team_exports, {
  default: () => Team,
  loader: () => loader2
});
var import_react6 = require("@remix-run/react");

// app/components/team-member.jsx
var TeamMember = ({ teamMember }) => {
  var _a, _b, _c, _d, _e;
  console.log(teamMember);
  return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-6"
  }, ((_e = (_d = (_c = (_b = (_a = teamMember.attributes.image) == null ? void 0 : _a.data) == null ? void 0 : _b.attributes) == null ? void 0 : _c.formats) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.url) && /* @__PURE__ */ React.createElement("img", {
    className: "mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56",
    srcSet: teamMember.attributes.image.data.attributes.formats.thumbnail.url,
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-lg leading-6 font-medium space-y-1"
  }, /* @__PURE__ */ React.createElement("h3", null, teamMember.attributes.name), /* @__PURE__ */ React.createElement("p", {
    className: "text-indigo-600"
  }, teamMember.attributes.role)))));
};

// route:/Users/michaelfrieze/Dev/projects/pixiemetaremixfront/app/routes/team.jsx
var loader2 = async ({ request }) => {
  const res = await fetch(`${process.env.API_URL}/api/team-members?populate=image`);
  if (!res.ok) {
    console.error(res);
    const resObj2 = await res.json();
    throw new Error(`${resObj2.error.status} | ${resObj2.error.name} | Message: ${resObj2.error.message} | Details: ${JSON.stringify(resObj2.error.details)}`);
  }
  const resObj = await res.json();
  const loaderData = resObj.data;
  return loaderData;
};
function Team() {
  const loaderData = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight sm:text-4xl"
  }, "Meet our team"), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl text-gray-500"
  }, "Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.")), /* @__PURE__ */ React.createElement("ul", {
    className: "mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
  }, loaderData.map((teamMember) => /* @__PURE__ */ React.createElement(TeamMember, {
    key: teamMember.id,
    teamMember
  }))))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "1028fa1a", "entry": { "module": "/build/entry.client-Y6JS6AUV.js", "imports": ["/build/_shared/chunk-7GJFJIBY.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ODR6RNTH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "root", "path": "blog/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-IQ6TP3PS.js", "imports": ["/build/_shared/chunk-XI4ENKXN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-SHCJ4TAW.js", "imports": ["/build/_shared/chunk-XI4ENKXN.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-QTGEZGGU.js", "imports": ["/build/_shared/chunk-XI4ENKXN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/team": { "id": "routes/team", "parentId": "root", "path": "team", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/team-NY3HDXWQ.js", "imports": ["/build/_shared/chunk-XI4ENKXN.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1028FA1A.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/team": {
    id: "routes/team",
    parentId: "root",
    path: "team",
    index: void 0,
    caseSensitive: void 0,
    module: team_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
