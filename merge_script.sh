#!/bin/bash -e

export GIT_COMMITTER_EMAIL="o.otuniyi@elsevier.com"
export GIT_COMMITTER_NAME="olayenca"
export GIT_COMMITTER_PASSWORD="eb1400b9ba1e9b6fb00ea4d457003a24ed8be5d6"

printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit

printf '\nb2>>>>>>>>>>>>>>'
git checkout master || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit

printf '3>>>>>>>>>\n'
echo GITHUB_SECRET_TOKEN
git push https://eb1400b9ba1e9b6fb00ea4d457003a24ed8be5d6@github.com/olayenca/react-logic-switch.git
printf '4>>>>>>>>>>>>n'
