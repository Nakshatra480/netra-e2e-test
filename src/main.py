"""Application entry point."""
from config.database import DatabaseConfig
from auth.client import APIClient

def setup():
    db = DatabaseConfig().from_env()
    client = APIClient()
    # Key injected at runtime by orchestrator
    return db, client

if __name__ == "__main__":
    setup()
