# API Documentation

This directory contains the auto-generated OpenAPI specification for the Hackathon API.

## Files

- `openapi.json` - OpenAPI 3.0 specification (auto-generated on server startup)

## Using the OpenAPI Specification

### 1. Swagger UI (Recommended)
Access the interactive documentation at: `http://localhost:3000/api/docs`

### 2. Import to API Clients
You can import `openapi.json` into:
- **Postman**: File → Import → Upload `openapi.json`
- **Insomnia**: Create → Import → From File
- **Thunder Client** (VS Code): Import → OpenAPI

### 3. Generate Client SDKs
Use OpenAPI Generator to create client libraries:

```bash
# Install OpenAPI Generator
npm install @openapitools/openapi-generator-cli -g

# Generate TypeScript client
openapi-generator-cli generate -i openapi.json -g typescript-axios -o ./clients/typescript

# Generate Python client
openapi-generator-cli generate -i openapi.json -g python -o ./clients/python

# Generate Java client
openapi-generator-cli generate -i openapi.json -g java -o ./clients/java
```

### 4. API Contract Testing
Use the spec for contract testing with tools like:
- Dredd
- Pact
- Schemathesis

## API Overview

### Aid Worker Endpoints
- `GET /api/aidworker` - List all aid workers
- `GET /api/aidworker/{id}` - Get specific aid worker
- `POST /api/aidworker` - Create aid worker
- `PUT /api/aidworker/{id}` - Update aid worker
- `PATCH /api/aidworker/{id}` - Partial update
- `DELETE /api/aidworker/{id}` - Delete aid worker

### Refugee Endpoints
- `GET /api/refugee` - List all refugees
- `GET /api/refugee/{id}` - Get specific refugee
- `POST /api/refugee` - Create refugee
- `PUT /api/refugee/{id}` - Update refugee
- `PATCH /api/refugee/{id}` - Partial update
- `DELETE /api/refugee/{id}` - Delete refugee

## Regenerating the Specification

The `openapi.json` file is automatically regenerated every time the server starts. To manually regenerate:

1. Start the server: `npm run start:dev`
2. The file will be created/updated in `backend/docs/openapi.json`

## Version

Current API Version: **1.0**
