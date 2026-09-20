/**
 * Ledger search endpoint.
 *
 * ⚠️ SYNTHETIC FIXTURE — intentionally vulnerable. Not a real service.
 *
 * Category 4: Dangerous Input Flow.
 * `req.query.q` reaches a SQL string and a shell command without validation
 * or parameterisation. Both sinks are reachable from an unauthenticated route.
 */

import { execSync } from 'node:child_process';

export function searchLedger(db, req) {
  const term = req.query.q;

  // Untrusted input concatenated straight into SQL.
  const sql = `SELECT id, amount, memo FROM ledger WHERE memo LIKE '%${term}%'`;
  const rows = db.query(sql);

  return rows;
}

export function exportMatching(req) {
  const term = req.query.q;

  // Untrusted input concatenated into a shell command.
  return execSync(`grep -r "${term}" /var/log/ledger/ | head -50`).toString();
}
