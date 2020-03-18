#!/bin/bash -e

export GIT_COMMITTER_EMAIL="o.otuniyi@elsevier.com"
export GIT_COMMITTER_NAME="olayenca"
export GIT_COMMITTER_PASSWORD="5060ff47aa0c1f26c1e84e7ec2a22a93e3fa2e1b"

printf '1>>>>>>>>>>>>>.\n'
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit

printf '\nb2>>>>>>>>>>>>>>'
git checkout master || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit

printf '3>>>>>>>>>\n'
echo GITHUB_SECRET_TOKEN
git push https://5060ff47aa0c1f26c1e84e7ec2a22a93e3fa2e1b@github.com/olayenca/react-logic-switch.git
printf '4>>>>>>>>>>>>n'
