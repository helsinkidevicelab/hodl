#!/usr/bin/env bash

function log {
  printf "[$(date +%Y-%m-%d:%H:%M:%S)]: $*\n"
}

cd "${BASH_SOURCE%/*}/.." || exit

if [ -z "$AWS_ACCESS_KEY_ID" ]; then
  log "Need to set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY"
  exit 1
fi

if [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
  log "Need to set AWS_SECRET_ACCESS_KEY and AWS_SECRET_ACCESS_KEY"
  exit 1
fi

log "Starting deploy"

stout deploy --key "$AWS_ACCESS_KEY_ID" --secret "$AWS_SECRET_ACCESS_KEY"

if [ $? -eq 0 ]; then
    log "The deploy seems to have succeeded"
else
    log "The deploy seems to have FAILED"
    exit $?
fi
