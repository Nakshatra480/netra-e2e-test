# Netra end-to-end fixture

This repository is a permanent, deliberately insecure **test fixture** for Netra.
It is not a real application and is never deployed.

Everything here is synthetic. Every credential-shaped string is fake and has
never been valid anywhere. Do not report these as vulnerabilities.

## What the fixture covers

| # | Category | Where |
|---|---|---|
| 1 | Credential Exposure | `src/client/payment.js` |
| 2 | Sensitive Secret Flow | `src/server/config.js` → `src/client/` |
| 3 | Authorization / Permission Boundary | `src/server/authorization.js` |
| 4 | Dangerous Input Flow | `src/server/search.js` |
| 5 | Security Configuration Regression | `config/security.json` |

## Detection status

Netra's investigator currently ships one deterministic analyzer,
`secret-flow-v1`, which proves categories 1 and 2 by tracing a secret from the
point a commit introduces it to a context that publishes it.

Categories 3, 4 and 5 are present as fixture material. No analyzer reports them
yet, and Netra does not pretend otherwise: an investigation of this repository
will show findings only for what was actually proven.

## The demo commit

The Live Demo pins one commit rather than following `main`, because the
analyzer is diff-scoped — it reports what a commit *introduces*. Commits added
after the pinned one do not change what the demo finds.
