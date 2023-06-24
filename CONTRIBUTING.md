# Contributing to Ktnext Microsite React

We're delighted that you're interested in contributing to the `Bliss` library! Please review the following guidelines to ensure a smooth contribution process.

## Code of Conduct

Participation in this project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure to read it before making contributions.

## Submitting Issues

If you encounter an issue with the library, please submit it on our [GitHub Issue Tracker](https://github.com/bliss-design/bliss/issues). Provide as much detail as possible to help us understand the problem.

## Submitting a Pull Request (PR)

Here are the guidelines for submitting a PR:

1. Check the [GitHub PRs page](https://github.com/bliss-design/bliss/pulls) to ensure that there's no ongoing work related to your proposed changes.

2. Create a new issue describing the changes you want to make.

3. Create a new branch directly in this repository, named after the issue you've just created. For instance, if your issue number is 123, name the branch `issue-123`.

```sh
git checkout -b issue-123
```

4. Make your changes, and ensure they are covered by appropriate test cases.

5. Run the full test suite and make sure all tests pass.

6. Commit your changes using a descriptive commit message that references the issue.

```sh
# For instance, if your issue number is 123
git commit -a -m "fix: detailed description of what you changed (fixes #123)"
```

7. Push your branch to GitHub:

```sh
git push origin issue-123
```

8. In GitHub, create a new pull request targeting the `main` branch.

If we suggest any changes:

- Implement the necessary updates.
- Rerun the test suites to confirm that all tests still pass.
- Rebase your branch and force push to this GitHub repository to update your pull request:

```sh
git rebase main -i
git push -f
```

And you're done! We appreciate your contribution.

## After Your Pull Request is Merged

After your PR is merged, you can safely delete your branch and pull the changes from the `main` branch:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell:

```sh
git push origin --delete my-fix-branch
```

- Check out the `main` branch:

```sh
git checkout main -f
```

- Delete the local branch:

```sh
git branch -D my-fix-branch
```

- Update your `main` with the latest upstream version:

```sh
git pull --ff origin main
```

We're grateful for your contributions!

## Questions?

Please feel free to reach out if you have any questions or need assistance. Your contributions and efforts are appreciated!
