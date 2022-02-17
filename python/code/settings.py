from os import environ as env

api_port = env.get("API_PORT", 8000)
redis_host = env.get("REDIS_HOST", "redis")
pg_host = env.get("POSTGRES_HOST", "postgres")
pg_user = env.get("POSTGRES_USER", "postgres")
pg_pass = env.get("POSTGRES_PASSWORD","postgres")
pg_db = env.get("POSTGRES_DB","postgres")
bot_token = env.get("BOT_TOKEN","aaa:bbbcccddd")