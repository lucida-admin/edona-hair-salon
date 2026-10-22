#!/bin/sh
# Cloudflare Pages build step. Builds from the production branch are untouched.
# Preview builds from any other branch are marked noindex so search engines
# do not index the staging copy alongside the live site.

if [ "$CF_PAGES_BRANCH" = "main" ]; then
  echo "Production build (main): no changes."
  exit 0
fi

echo "Preview build (${CF_PAGES_BRANCH:-local}): applying noindex."
perl -0pi -e 's/(name="robots"\s+content=")[^"]*"/$1noindex, nofollow"/g' ./*.html
printf 'User-agent: *\nDisallow: /\n' > robots.txt
