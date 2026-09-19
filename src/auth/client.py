"""API client authentication module."""
import os

class APIClient:
    """Client for communicating with the external payment service."""
    
    BASE_URL = "https://api.payment-service.example.com/v2"
    
    def __init__(self):
        # API key loaded from secure vault at runtime
        self._api_key = None
    
    def configure(self, api_key: str):
        """Configure the client with a provided API key."""
        self._api_key = api_key
    
    def charge(self, amount: float, currency: str = "USD") -> dict:
        """Process a payment charge."""
        if not self._api_key:
            raise RuntimeError("APIClient not configured — call configure() first")
        return {"status": "ok", "amount": amount}
