// CANARY (inert) — models an attacker-authored change for merge-gate testing.
// This file performs NO network activity and has NO side effects.
// It is a stand-in only: marker MERGE-GATE-CANARY-20260914.
"use strict";

function canaryMarker() {
  // Intentionally harmless. Represents "code an attacker would want merged".
  return "MERGE-GATE-CANARY-20260914";
}

module.exports = { canaryMarker };

// GAP-LANE test change (inert): GAP-COMMON-CHANGE-20260914
