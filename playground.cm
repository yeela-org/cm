# -*- mode: yaml -*-

manifest:
  version: 1.0

automations:
  linearb_ai_review:
    if:
      - true
    run:
      - action: code-review@v1
  pr_description_by_linearb_ai:
    if:
      - true
    run:
      - action: update-description@v1
        args:
          concat_mode: append
          description: {{ source | AI_DescribePR }}
