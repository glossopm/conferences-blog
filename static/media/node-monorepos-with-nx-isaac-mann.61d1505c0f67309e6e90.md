# Workshop Recap: Node Monorepos with Nx by Isaac Mann

During a recent conference, NodeCongress 2023, I had the opportunity to attend a workshop by Isaac Mann on "Node Monorepos with Nx." Nx is a powerful monorepo tool that enables developers to manage multiple projects within a single repository. In this blog post, I'll share some key takeaways from the workshop, along with additional insights I've gathered from the Nx official website.

## Benefits of Monorepos

1. **Atomic changes:** Monorepos facilitate faster and more efficient collaboration among team members. When a UI library with a breaking change exists within the same repository, it's easier to determine whether the changes affect other parts of the application.

2. **Shared code:** A monorepo simplifies code sharing across multiple applications and libraries. When a function changes, you only need to update it once within the monorepo.

3. **Single set of dependencies:** Monorepos allow you to maintain consistent library versions across all repositories, preventing complicated mismatches.

## Challenges of Code Collocation and How Nx Helps

1. **Running unnecessary tests:** Nx provides tooling to ensure that only the necessary tests run when changes are made to specific parts of the application.

2. **No code boundaries:** Nx offers controlled code sharing through features like Library API, tags, publishable libraries, and CODEOWNERS. This helps to define what parts of the code should be accessible to others.

3. **Inconsistent tooling:** Nx standardizes build, test, and lint tools across the entire repository, ensuring consistency and reducing confusion.

## Key Nx Features

1. **Faster command execution:** Nx provides executors, Nx Affected, and local and distributed caching (with Nx Cloud) for efficient testing and building processes.

2. **Controlled code sharing:** Nx promotes controlled code sharing using Library API, tags, publishable libraries, and CODEOWNERS.

3. **Consistent coding practices:** Nx encourages consistent coding practices through linting, generators, Nrwl plugins, and community plugins.

4. **Accurate architecture diagrams:** Nx offers a visual representation of your project's dependencies using the `nx dep-graph` command.

## Nx Project Structure

In an Nx workspace, projects are divided into two main categories: applications (apps) and libraries (libs). Understanding the distinction between these two and how they interact is crucial for using Nx effectively.

### Applications (apps)

Applications represent the deployable units of your workspace. These can be web applications, mobile apps, server-side applications, or any other project that can be built, tested, and deployed. Apps are typically the entry points for users, and they consume the functionality provided by libraries.

Apps are located in the apps directory of an Nx workspace. Each app has its own directory, which includes the source code, assets, and configuration files specific to that app. The app's configuration is stored in the workspace.json or angular.json file (depending on whether you're using an Nx workspace or an Angular CLI workspace).

### Libraries (libs)

Libraries are modular, reusable pieces of code that can be shared across multiple apps or other libraries in the workspace. They provide functionality that is not specific to a single app and can be used by multiple applications, promoting a DRY (Don't Repeat Yourself) approach to software development.

Libraries are stored in the libs directory of an Nx workspace. Similar to apps, each library has its own directory with its source code, assets, and configuration files. The library's configuration is also stored in the workspace.json or angular.json file.

### Interaction between apps and libs

Apps and libs interact through a well-defined API, with apps consuming the functionality provided by libraries. This interaction is facilitated by the use of imports and exports in the source code.

When an app needs to use a piece of functionality provided by a library, it imports the relevant module, component, or service from the library. The library, in turn, exports the necessary modules, components, or services that should be available for consumption by other projects.

This interaction encourages a clean separation of concerns, with libraries encapsulating specific functionalities and apps serving as consumers of those functionalities.

### Example

Let's say you have a web application (app) that needs to display a list of products. Instead of implementing the product list UI and logic directly within the app, you can create a library that encapsulates the product list functionality. This library can then be imported and used in your app, as well as any other apps that require a similar product list feature.

In this scenario, the app and library interact with each other through the library's exported components or services, allowing for a modular and reusable approach to software development.

### Shared code

When you have an Nx library with shared code across multiple apps or other libraries, updating the library is as simple as making the necessary changes to the library code within the monorepo. Once the changes are made and committed, all apps and libraries that depend on the updated library will automatically use the new version.

To update an Nx library:

1. Navigate to the library's directory within the `libs` folder of your Nx workspace.
2. Modify the library's code as needed. This might include updating functions, components, or services.
3. Commit the changes to your version control system (e.g., Git).
4. If needed, run the tests for affected apps and libraries using the `nx affected:test` command to ensure that your changes haven't introduced any breaking changes or regressions.

When updating a library, you can quickly verify if your changes have caused any issues by running the `nx affected` commands, which only test and build the affected projects. This enables faster feedback and quicker resolution of potential issues.

In summary, in an Nx workspace, projects are organized into applications and libraries. Applications represent the deployable units, while libraries provide reusable code that can be shared across multiple apps. By understanding the distinction between apps and libs, and how they interact with each other, you can leverage the full potential of Nx to build scalable and maintainable projects.

## Getting Started with Nx

To install Nx globally, use the following command:

```bash
npm install -g nx
```

Then to create a new workspace with Nx, use the following command:

```bash
npx create-nx-workspace [workspace name]
```

The workspace name sets the directory, path alias, and npm scope for your projects.

Visit the Nx official documentation at [https://nx.dev](https://nx.dev/latest/angular/getting-started/intro) for a comprehensive guide on setting up and using Nx in your projects.

## Labs

During the workshop we did a series of labs created by Nrwl, the team behind Nx. There are two labs available, a simple Node.js lab, and a more complete lab with Angular, NestJs, and much more. During the workshop we followed along the Node labs and created a small Nx project with various `apps` and `libs` to see how they work with and interacted with each other. This would be my recommended next steps if you want to get hands-on with Nx. You can find the labs here, simply follow along or fork the repository into your own GitHub account:

- [Nx Workshop Node on Github](https://github.com/glossopm/nx-workshop-node) - Short 1 Day Node.js specific Lab from the workshop
- [Nx Workshop on GitHub](https://github.com/nrwl/nx-workshop) - Full 2 day lab w/ Angular, NestJS, and more!

## Conclusion

Nx is a powerful monorepo tool that provides numerous benefits for managing and maintaining your Node projects. With support for multiple frameworks, extensibility, best practices guidance, CI/CD integration, and an enhanced developer experience, Nx is a valuable asset for any development team. Visit the official Nx website and explore additional resources to learn more about how Nx can help streamline your development processes.
