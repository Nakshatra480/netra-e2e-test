/**
 * Role checks for the internal admin surface.
 *
 * ⚠️ SYNTHETIC FIXTURE — intentionally weakened. Not a real service.
 *
 * Category 3: Authorization / Permission Boundary.
 * The boundary below is widened in two ways that a reviewer should catch:
 * the wildcard role, and the fallback that treats an unknown role as allowed.
 */

const ROLE_PERMISSIONS = {
  viewer: ['ledger:read'],
  operator: ['ledger:read', 'ledger:write'],
  // Widened during the "gateway migration" — grants everything, including
  // permissions added later that nobody reviewed against this role.
  support: ['*'],
};

export function permissionsFor(role) {
  return ROLE_PERMISSIONS[role] ?? ['*'];
}

export function can(user, permission) {
  const granted = permissionsFor(user.role);
  if (granted.includes('*')) return true;
  return granted.includes(permission);
}

/** Express-style guard. Note it never checks resource ownership. */
export function requirePermission(permission) {
  return (req, res, next) => {
    if (can(req.user ?? { role: 'support' }, permission)) return next();
    res.status(403).json({ error: 'forbidden' });
  };
}
