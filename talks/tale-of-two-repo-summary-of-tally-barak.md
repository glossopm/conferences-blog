# Tale of Two Repo: Strategies for Managing Monorepos

I recently attended a fascinating talk titled "Tale of Two Repo - Strategies for managing Monorepos" by Tally Barak. The talk delved into the history of modern JavaScript, monorepos, and the strategies to consider when managing monorepos. In this blog post, I will share the key takeaways from Tally's talk and my thoughts on the subject.

## A Brief History of Modern JavaScript, Monorepos, and Lerna

Tally began the talk with a famous quote from Charles Dickens, "It was the best of times, it was the worst of times", and connected it to the evolution of JavaScript and monorepos. 

The journey started with the introduction of ES6, which brought significant improvements to the JavaScript language. This marked the beginning of modern JavaScript, and with it came the concept of Javascript monorepo tooling. Babel, a widely used JavaScript compiler, was one of the first projects to adopt the monorepo structure. Initially, there was a one-to-one relationship between repositories and packages for each of the plugins it created, which later evolved into multiple repositories for multiple packages. Finally, it was decided to move all the packages into a single repository, giving birth to the monorepo.

As the monorepos grew, there was a need for tools to manage them. To address this, Babel's team built utilities to help build the packages, and eventually, these utilities were extracted into another repository called Lerna. Lerna was one of the first JavaScript monorepo management tools and became almost synonymous with monorepos. It provided essential features like managing dependencies, versioning, and publishing packages. Although the monorepo landscape has changed a lot since then, Lerna's early contributions played a crucial role in shaping the monorepo management ecosystem.

## Decisions and Strategies for Monorepos

Tally emphasized that the decisions and strategies we make for monorepos impact the quality of the product, the speed of development, and the training we need to provide to the team. So it is important that we choose the right tool for us. She then went on to discuss the following five strategies:

1. **Install**: Handling multiple `package.json` files and dependencies.
2. **Link**: How to link the packages that live within the monorepo.
3. **Develop**: How to define the development process in a monorepo.
4. **Build**: How to manage the build process across packages.
5. **Release**: How to publish and version the packages in a monorepo.

### What is a Monorepo?

A monorepo is a single repository containing multiple artifacts, such as services, applications, packages, and backend services, that you want to share or publish.

When considering a monorepo, two important questions need to be answered:

1. What do I want to include in my monorepo? (e.g. tools, frontend apps, microservices, backend servers, design system)
2. Should I use a monorepo?

### Strategy 1: Install

In a project with multiple packages, duplicate `node_modules` across different packages can be large. To address this, you can _hoist_ the `node_modules`, moving them to the root of the repository and installing them only once. This works because Node's search algorithm starts at the bottom and moves up a level until it reaches the root of the project. Hoisting not only reduces disk space usage but also helps in speeding up installation times.

However, hoisting can lead to potential issues, such as forgetting to declare a dependency in a package. It's essential to carefully review the dependencies and ensure they're correctly declared in each package.

### Strategy 2: Link

This works for external packages, but what about local packages that are internal to your monorepo?
There are two main options for linking local packages within a monorepo:

1. Publish the packages to a package registry (even a private one) and install them from there. This approach ensures that your packages are always up-to-date and available for other projects. However, it can introduce some overhead in terms of publishing and updating packages in the registry.
2. Use a tool like `yarn` to create a symlink (reference) between the current `node_modules` and the other package within the monorepo. This approach makes it easy to develop and test changes across multiple packages simultaneously. However, it requires careful management of dependencies and package versions to avoid conflicts.

### Strategy 3: Develop

There are two approaches to defining the development process in a monorepo:

1. **Decentralized**: Each package has its own build, test, and linting processes. This approach can be beneficial if each package has unique requirements or if you want to maintain a certain level of autonomy between the packages. However, this can lead to duplicated configurations and a higher maintenance burden.
2. **Centralized**: Configuration is centralized, and execution is on a per-project or per-package basis. This approach promotes consistency across the packages and reduces duplication of configuration files. However, it may require more coordination between teams and some trade-offs in terms of individual package autonomy.

### Strategy 4: Build

There are various build strategies to consider when managing a monorepo:

1. **Naive build**: Build all packages one-by-one in a predetermined order. This approach is simple but can be slow, especially when working with a large number of packages.
2. **Selective build**: Look at source control to determine which packages have changed and build only those packages. This approach is more efficient than a naive build but may still require rebuilding some unchanged packages that depend on updated packages.
3. **Optimized build**: Use caching to skip building packages that have not changed, similar to what `nx` does as part of its optimization process. This approach reduces build times even further, making the development process more efficient.

### Strategy 5: Release

When it comes to releasing and versioning packages in a monorepo, there are two main approaches:

1. **Unified**: Publish all packages under the same release and version number, regardless of the changes made to individual packages. This approach is followed by projects like Angular and Storybook. It simplifies version management and ensures consistency across the packages, but it can lead to unnecessary updates for some packages.
2. **Distributed**: Each package has its own independent version number. Only release packages that have had changes and ensure any dependent packages are backward compatible and still work with the new version. This approach provides more flexibility and granularity in package updates but requires careful management of dependencies and versioning.

## Summary

To manage a monorepo effectively, it's crucial to consider the following aspects:

1. Define the scope of your monorepo: What should be included?
2. Think through the five stages of strategy: Install, Link, Develop, Build, and Release.

Tally suggested that we think about these strategies in reverse order, starting with 'Release'. By defining your release goals first, you can derive the build strategy, development process, and ultimately the linking and installation strategies. Once you have a clear understanding of the strategies that fit your monorepo, you can then choose the appropriate tools (e.g., Lerna, nx, Yarn workspaces) to manage it effectively.

Implementing the right strategies for managing monorepos can greatly impact the quality of your product, speed of development, and team training. By considering these strategies and adapting them to your project's needs, you can reap the benefits of a well-managed monorepo while minimizing potential challenges.

In conclusion, monorepo tooling have come a long way since the early days of Lerna. With the right strategies and tools in place, managing monorepos can greatly streamline the development process, improve code sharing, and enhance collaboration across teams. By learning from the insights shared by Tally Barak and tailoring the strategies to your project's needs, you can make the most of monorepos and create a more efficient and cohesive development environment.
