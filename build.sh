#!/bin/bash

echo "Building: Test React App"

echo "Installing NPM dependencies..."

npm install

echo "Finished installing node_modules"

echo "Running test suite..."

npm test

echo "Finished test suite"

echo "Run production build..."

GENERATE_SOURCEMAP=false npm run build

echo "Finished production build"

echo "Sleep a bit ... for good measure"

sleep 100

echo "DONE"
