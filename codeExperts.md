manifest:
  version: 1.0

triggers:
  include:
    repository:
      - dnr-release-toil-fe-journey

config:
  git_blame_since: '2026-07-01'

automations:
  code_experts:
    if:
      - true
    run:
      - action: explain-code-experts@v1
        args:
          gt: 10
