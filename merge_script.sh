#!/bin/bash -e

export GIT_COMMITTER_EMAIL=GITHUB_EMAIL
export GIT_COMMITTER_NAME=GITHUB_NAME

printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit

printf '\nb2>>>>>>>>>>>>>> '
git checkout master || exit
git merge --no-ff "origin/$TRAVIS_PULL_REQUEST_BRANCH" || exit

printf '3>>>>>>>>>\n'
git push https://${GITHUB_SECRET_TOKEN}/${GITHUB_NAME}/react-logic-switch.git master
Username: GITHUB_NAME
Password: GITHUB_PASSWORD
printf '4>>>>>>>>>>>>n'