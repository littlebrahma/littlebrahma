#!/bin/bash

# Enable error reporting to the console.
set -e

# Install bundles if needed
bundle check || bundle install

# NPM install if needed.
. $HOME/.nvm/nvm.sh && nvm install 6.1 && nvm use 6.1
npm install

# Build the site.
gulp build

# Checkout master and remove everything https://github.com/mcsekar123/mcsekar123.github.io.git
git clone https://${GH_TOKEN}/mcsekar123/mcsekar123.github.io.git ../mcsekar123.github.io.master
cd ../mcsekar123.github.io.master
git checkout master
rm -rf *

# Copy generated HTML site from source branch in original repo.
# Now the master branch will contain only the contents of the _site directory.
cp -R ../mcsekar123.github.io/_site/* .

# Make sure we have the updated .travis.yml file so tests won't run on master.
cp ../mcsekar123.github.io/.travis.yml .
git config user.email "chandrasekar.marappan@hashworks.co"
git config user.name "mcsekar123"

# Commit and push generated content to master branch.
git status
git add -A .
git status
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --quiet origin master > /dev/null 2>&1