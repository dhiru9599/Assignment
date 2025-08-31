#!/bin/bash

# Exit on any error
set -e

echo "Starting Django application..."

# Set runtime environment variable
export DJANGO_RUNTIME=true

# Collect static files (now safe with runtime flag)
echo "Collecting static files..."
python manage.py collectstatic --noinput

# Wait for database to be ready and run migrations
echo "Running database migrations..."
python manage.py migrate --noinput

# Start the application
echo "Starting Gunicorn server..."
exec gunicorn todo_backend.wsgi:application --bind 0.0.0.0:$PORT --workers 3
