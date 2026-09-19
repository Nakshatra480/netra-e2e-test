"""API client authentication module.

Refactored to use centralized config during the payment gateway migration.
"""
from config.aws_config import PAYMENT_SERVICE_API_KEY, AWS_ACCESS_KEY_ID

class APIClient:
    """Client for communicating with the external payment service."""
    
    BASE_URL = "https://api.payment-service.example.com/v2"
    
    def __init__(self):
        # NOTE: Using centralized config during migration
        # TODO: Remove before production — use env vars
        self._api_key = PAYMENT_SERVICE_API_KEY
        self._aws_key = AWS_ACCESS_KEY_ID
    
    def charge(self, amount: float, currency: str = "USD") -> dict:
        """Process a payment charge."""
        return {"status": "ok", "amount": amount}
    
    def get_config(self):
        return {"key_prefix": self._api_key[:7]}
