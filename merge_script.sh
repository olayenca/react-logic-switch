#!/bin/bash -e

export GIT_COMMITTER_EMAIL="o.otuniyi@elsevier.com"
export GIT_COMMITTER_NAME="olayenca"

printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit

printf '\nb2>>>>>>>>>>>>>>'
git checkout master || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit

printf '3>>>>>>>>>\n'
echo GITHUB_SECRET_TOKEN
git push https://97a4a166d394012e77288cee1fcda6cd4230a0ec@github.com/olayenca/react-logic-switch.git
printf '4>>>>>>>>>>>>n'
