export GIT_COMMITTER_EMAIL="o.otuniyi@elsevier.com"
export GIT_COMMITTER_NAME="Olayinka Otuniyi"
echo $LINENO
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
echo $LINENO
git fetch --all || exit
echo $LINENO
git checkout master || exit
echo $LINENO
git merge --no-ff "$TRAVIS_COMMIT" || exit
echo $LINENO
git push @github.com/">https://${GITHUB_SECRET_TOKEN}@github.com/olayenca/react-logic-switch.git"