FROM python:3.11-slim

RUN pip install --no-cache-dir poetry

COPY . .
RUN poetry config virtualenvs.create false \
    && poetry install

EXPOSE 8000

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

