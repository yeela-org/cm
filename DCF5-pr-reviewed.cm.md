# -*- mode: yaml -*-
manifest:
  version: 1.0

triggers:
  exclude:
    repository:
      - pasha

automations:
  DCF5-pr-reviewed:
    on:
      - merge
    if:
      - {{ branch.base == "main" }}
      - {{ pr.approvals | length == 0 }}
    run:
      - action: add-label@v1
        args:
          label: "DCF5-merge-without-approve"
          color: 'F6443B'
