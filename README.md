# securesdlc-mergegate-repro (controlled reproduction sandbox)

Controlled test repository for an **authorized** Kraken bug-bounty research lane
(SecureSDLC SAST merge-gate mechanics).

- Purpose: reproduce the `nautilus-wraith/securesdlc-*` required-workflow chain and a
  branch-protection required-check gate in a repo we own, then test whether an
  attacker-controlled PR (forged SARIF / check-output clobber) can make the required
  check report success.
- Contains: a byte-copy of the org `securesdlc-required-workflow.yml` (public upstream
  content), and — on research branches only — benign, clearly-labelled "canary" files
  plus a forged `semgrep.sarif` fixture.
- **No production code. No real secrets. No malicious payloads.** Canary files are inert
  text/JS stubs used to model a "malicious change" for gate testing.
- No Kraken repository was modified by this lane; no PR was opened against any Kraken repo.
