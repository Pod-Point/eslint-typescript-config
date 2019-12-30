# ESLint Typescript Configuration

[![Build Status](https://travis-ci.com/Pod-Point/eslint-typescript-config.svg?branch=master)](https://travis-ci.com/Pod-Point/eslint-typescript-config)
[![codecov](https://codecov.io/gh/Pod-Point/eslint-typescript-config/branch/master/graph/badge.svg)](https://codecov.io/gh/Pod-Point/eslint-typescript-config)

Configuration for ESLint with Typescript.

## Usage

To install this package, run the following command:
```bash
npm install --save-dev @pod-point/eslint-typescript-config
```


## Development

### Installation

To install this packages dependencies, run the following command:
```bash
npm install
```

### Releases

This package is distributed via NPM and published automatically by Travis when creating a tagged commit. This can be done in one of 2 ways:

#### 1. Pre-merge via the CLI

**Before** merging your PR following code review & QA, run the following commands to update the package version and create a new release/tag.
```
npm version <major|minor|patch|prerelease>
git push && git push --tags
```

If you forget to do this before merging, this is not a problem, just create a new branch from master and run these same commands, remembering to open and merge a PR for this branch so that the `package.json` file is updated, alternatively, see option 2.

#### 2. Post-merge via code & GitHub

**After** merging your code changes, create a new branch/PR from master and update the package version in `package.json` to whatever you wish the next release to be.

**Before** merging this PR, create a release via GitHub with a tag version to match this package version number, this will trigger the tagged commit and in turn the automatic deployment to NPM.
