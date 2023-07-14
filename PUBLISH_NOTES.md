# Publishing and version updates for thallo npm package
After completing our development and after each package update we need to publish our package on https://npmjs.com. In order to publish our npm package we need to complete several steps:
1. Before publishing the package we need to update current version. We can use simple command in host terminal to do that. 
So in the package directory please run in your host terminal command `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]` (more info about semantic description can found [here](https://docs.npmjs.com/about-semantic-versioning) or [here](https://semver.org/))
2. Now we should login with command in our host terminal 
    ```
    $ npm login
    Username: <your-username>
    Password:
    Email: (this IS public) <your-email>
    Logged in as <your-username> on https://registry.npmjs.org/.
    ```
3. Publish npm package with typing a command in your host terminal `npm publish` (for private npmjs repos) and if you wish to publish it and make publicly available please use this command `npm publish --access=public` instead