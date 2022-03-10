#!/bin/bash

REPO_DOMAIN=github.com
REPO_NAME=codiy1992/anki
REPOSITORY=${HOME}/.anki
WORK_TREE="${HOME}/Library/Application Support/Anki2"

cd ${HOME}

if [ ! -d ${REPOSITORY} ] || [ "$(ls -A ${REPOSITORY})" = "" ]; then
    # Clone Repository
    git clone --bare https://${REPO_DOMAIN}/${REPO_NAME}.git ${REPOSITORY}
    # Replace config
    if [ "$(uname)" = "Darwin" ]; then
        sed -i '' "s/^\turl = http.*/\turl = git@${REPO_DOMAIN}:${REPO_NAME//\//\\\/}.git/" ${REPOSITORY}/config
    else
        sed -i "s/^\turl = http.*/\turl = git@${REPO_DOMAIN}:${REPO_NAME//\//\\\/}.git/" ${REPOSITORY}/config
    fi
fi

echo -e "\033[49;32mSuccessfully!
The \033[49;34mconflict files \033[49;32mhas been moved to \033[49;34m~/.anki-backup\033[0m\033[49;32m.
Now you need to add aliases showed below and \033[49;34msource your .zshrc or .bashrc file \033[49;32mmanually
\033[49;34m
alias gat='git --git-dir=\${HOME}/.anki --work-tree=${WORK_TREE}'
\033[49;32m
and then you can use \033[49;34m\`gat\`\033[49;32m command to manage your anki.\033[0m"

