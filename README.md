# vc-test

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### What metrics are essential in term of Speed?

```
Time to First Byte (TTFB)
First Contentful Paint (FCP)
Largest Contentful Paint (LCP)
First Input Delay (FID)
Time to Interactive (TTI)
Total Blocking Time (TBT)
Cumulative Layout Shift (CLS)
Interaction to Next Paint (INP)
```

### Can you name ways to increase speed (perceived or actual load time)?

```
1. Try to show loading, content at soon at user go to page. Will load original data later to Improve FCP
2. Use Gzip to compress
3. Use Http2 or higher
4. Compress resource enough to use
5. lazy loading image
6. split bulder to loadzy load page
7. Fixed height of image tag avoid layout flickering
8. Use attribute for image tag to use correct resolution based on device
9. Use CDN
10. Use Caching
```

### Could you tell me what are SSR, pre-rendering and Dynamic rendering?

```
1. SSR is a technique used in web development to render a web page on the server and then send the fully rendered page to the client (browser). In traditional client-side rendering, the server sends a bare-bones HTML file along with JavaScript files, and the client's browser is responsible for rendering the content and executing the JavaScript to populate the page. SSR, on the other hand, generates the complete HTML content on the server itself, including the data, before sending it to the client.

2. Pre-rendering is a variation of SSR, but it's performed before the content is requested by the user. In pre-rendering, static HTML pages are generated at build time or during deployment, and these pre-rendered pages are then served to users. The pre-rendering process typically happens during the build phase of the web application.

3. Dynamic rendering is a hybrid approach that allows for a combination of SSR and client-side rendering (CSR) based on certain conditions. It means that the server decides whether to render a page on the server-side and send it to the client or to send a minimal page and let the client-side JavaScript take over for rendering and fetching data.
```

### You have a bug to fix, you find the file(s) where the bug occurs, the code is a mess, what do you do ?

```
1. If use Framework like reactjs, vuejs we can use debug extension to trace the component
2. Try to inspect html to find the content. And search try to search in project with there content, try to find component, file
3. Based on url, try to find the component in router, and look top down component to find the file
4. Try to console, mark debug in dev tool to detect code flow, file

```

### What represent FrontEnd to you ?

```
- It's about all of what user see
- As frontend engineer, we not only care about UI, UX. But also care about network, data, performance. Collaborate with backend, API
- Need to have knowledge about web fundamental, javascript foundation, Frontend library framework such as react or vue or angular.

```

### What was the last technical challenge you faced and how you did you handle it ?

```
- That's about building current project from scratch without any library.
- It's need to learn about Web render, canvas, GPU, Math, Image processing
- Handle some technical issue like: showing font with multiple language, Drawing SVG which export by designer,..

How I facing?
- To solved there problem I need to research a lot. After researching I have some solution for each problem.
- Making prototype to testing and communicate with planner about expectation, writing wiki, document to comparative between each solution: pros, cons, performance, consider business, time,...
- Measure performance, stress test for solution
- Making proposal to team.

```

### What is the next language/framework/stack you want to learn this year and why ?

```
- I learning about Design pattern, and system design.
- To become better Skill I think this is really important knowledge. If we do correct solution, pattern for common issue (which is written by Sr in industry) everything will become easy to maintain, collaborate. Product, project will become better.
- Also it's a necessary skill to become a next level in my plan (Tech lead or solution consultant)

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
