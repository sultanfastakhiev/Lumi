#!/bin/sh

echo "Waiting for psql to start..."

while ! nc -z "$POSTGRES_HOST" "$POSTGRES_PORT"; do
      sleep 0.1
done
echo "PostgreSQL started"

python main.py

exec "$@"