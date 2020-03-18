export GIT_COMMITTER_EMAIL="o.otuniyi@elsevier.com"
export GIT_COMMITTER_NAME="Olayinka Otuniyi"
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
git checkout master || exit
git merge --no-ff "$TRAVIS_COMMIT" || exit
git push @github.com/">https://${GITHUB_SECRET_TOKEN}@github.com/olayenca/react-logic-switch.git"