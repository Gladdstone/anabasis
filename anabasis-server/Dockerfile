FROM python:3.11-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    sqlite3
RUN mkdir -p /app/data

RUN pip install --no-cache-dir poetry

COPY . .
RUN poetry config virtualenvs.create false \
    && poetry install

EXPOSE 8000

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

