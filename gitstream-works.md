manifest:
  version: 1.0

automations:
  # Add tiger to the PR title
  add_tiger_to_title:
    on:
      - pr_created 
    if:
      - {{ not (🐯 in pr.title) }}
      - {{ pr.author | includes(term='yeelali14') }}
    run:
      - action: update-title@v1
        args:
          concat_mode: prepend
          title: |
            🐅 -
  small_change:
    if:
      - true
    run:
      - action: approve@v1
