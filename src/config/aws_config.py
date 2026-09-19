"""AWS configuration module.

NOTE: This file was created during a refactor to quickly test the new
      payment gateway integration. Credentials will be rotated before
      production deployment.

TODO: Remove hardcoded credentials — move to Secrets Manager
"""

# ⚠️  SYNTHETIC TEST DATA — NOT REAL CREDENTIALS ⚠️
# These values are intentionally fake for Netra E2E testing.
# Pattern matches what secret-flow-v1 detects.

AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"
AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
AWS_REGION = "eu-north-1"

STRIPE_SECRET_KEY = "sk_live_51NxEXAMPLEFAKETESTKEYabcdefghijklmnopqrstuvwxyz0123"
STRIPE_WEBHOOK_SECRET = "whsec_EXAMPLEFAKEa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9"

PAYMENT_SERVICE_API_KEY = "ps_prod_FAKEKEYFORNETRATESTING1234567890abcdef"

DATABASE_URL = "postgresql://admin:FAKE_TEST_PASSWORD_NETRA@rds.example.internal:5432/prod_db"
