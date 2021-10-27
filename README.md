# PostAPL Plugin Boilerplate

Сreate new PostAPL plugins in a few steps:

1. Execute the wizard script. It will ask you a few questions
   and fill all files with your data.

   ```sh
   npx postapl-plugin-boilerplate <directory>
   ```

   Call it with `--npm` argument, if you have [yarn](https://yarnpkg.com/) installed, but prefer to use npm as the package manager
   (by default, it will automatically decide whether to use yarn or npm):

   ```sh
   node postapl-plugin-boilerplate --npm <directory>
   ```

   Or use `--no-install` if you want to skip dependencies installation.

2. Your plugin repository will now have a clean Git history.
   [Create the GitHub repository](https://github.com/new)
   and push your project there.

3. Add your project to [Travis CI](https://travis-ci.org).

4. Write some code to `index.js` and tests to `index.test.js`.

5. Execute `npm test` command

6. Add input and output APL examples to `README.md`.

7. Add options descriptions if your plugin has them.

8. Fill `CHANGELOG.md` with initial version.

9. Release by calling `npx clean-publish`
   (this tool will remove development configs from `package.json`).

10. Fork [PostAPL](https://github.com/postapl/postapl), add your plugin to the
    [Plugins list](https://github.com/postapl/postapl/blob/main/docs/plugins.md)
    and send a pull request.
