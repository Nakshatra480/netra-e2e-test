"""Database configuration module."""

class DatabaseConfig:
    """Holds connection parameters for the application database."""
    
    def __init__(self):
        self.host = "localhost"
        self.port = 5432
        self.name = "app_db"
        # Credentials loaded from environment
        self.username = None
        self.password = None
    
    def from_env(self):
        """Load credentials from environment variables (secure pattern)."""
        import os
        self.username = os.environ.get("DB_USER")
        self.password = os.environ.get("DB_PASSWORD")
        return self
