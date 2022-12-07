set -e

npm run deployBuild
git add .
git commit -m 'deploy'
git subtree push --prefix dist origin gh-pages
