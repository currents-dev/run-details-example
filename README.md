# Setting or Overriding Git Commit Info for Cypress

- Set the `projectId` in `cypress.config.js`
- Use the command below, use your org's `recordKey`

```sh
COMMIT_INFO_BRANCH="custom_branch" \
COMMIT_INFO_MESSAGE="Custom Message" \
COMMIT_INFO_EMAIL="committer@email.com" \
COMMIT_INFO_AUTHOR="Mrs. Committer" \
COMMIT_INFO_SHA=79e4fa8a023803a0bf2ca9e3aa25f08ee371fee5 \
COMMIT_INFO_REMOTE="https://github.com/org/branch" \
npx currents run --parallel --record --key __your_key__ --ci-build-id `date +%s`
```
