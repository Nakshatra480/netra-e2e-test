"""Application entry point."""
from config.aws_config import AWS_REGION, DATABASE_URL
from config.database import DatabaseConfig
from auth.client import APIClient

def setup():
    db = DatabaseConfig().from_env()
    client = APIClient()
    print(f"Connecting to region: {AWS_REGION}")
    print(f"DB host: {DATABASE_URL.split('@')[-1].split('/')[0]}")
    return db, client

if __name__ == "__main__":
    setup()
