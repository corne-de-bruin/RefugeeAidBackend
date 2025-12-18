# Hackathon Backend

NestJS backend application that serves data from the Dataset.csv file via REST API using SQLite database with TypeORM.

## Features

- **SQLite Database**: Lightweight database with TypeORM for data persistence
- **Auto-seeding**: Automatically loads CSV data into the database on first startup
- **REST API**: Full CRUD endpoints for aid worker and refugee data
- **Query Support**: Filter by city, type of assistance, country, and application status
- **Swagger Documentation**: Interactive API documentation with Swagger UI

## Installation

```bash
cd backend
npm install
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The application will run on `http://localhost:3000`

## API Documentation

### Swagger UI (Interactive)

Once the application is running, access the interactive Swagger documentation at:

```
http://localhost:3000/api/docs
```

The Swagger UI provides:
- **Interactive API testing** - Try out all endpoints directly from the browser
- **Request/Response examples** - See example payloads for all operations
- **Schema definitions** - View all data models and their properties
- **Parameter descriptions** - Understand what each field requires

### OpenAPI Specification

The OpenAPI JSON specification is automatically generated and saved to:
```
backend/docs/openapi.json
```

This file can be used to:
- Generate client SDKs in multiple languages
- Import into API testing tools (Postman, Insomnia, etc.)
- Share API contracts with frontend developers
- Integrate with API gateways

## API Endpoints

### Get All Aid Workers
```
GET http://localhost:3000/api/aidworker
```

### Get Aid Worker by ID
```
GET http://localhost:3000/api/aidworker/:id
```

### Create New Aid Worker
```
POST http://localhost:3000/api/aidworker
Content-Type: application/json

{
  "nr": 102,
  "voornaam": "Jan",
  "achternaam": "Jansen",
  "geslacht": "Man",
  "typeHulpverlening": "Psychologische hulp",
  "leeftijd": 35,
  "woonplaats": "Amsterdam",
  "gesprokenTalen": "Nederlands, Engels"
}
```

### Update Aid Worker (Full)
```
PUT http://localhost:3000/api/aidworker/:id
Content-Type: application/json

{
  "voornaam": "Jan",
  "achternaam": "de Vries",
  "geslacht": "Man",
  "typeHulpverlening": "Juridische ondersteuning",
  "leeftijd": 36,
  "woonplaats": "Rotterdam",
  "gesprokenTalen": "Nederlands, Engels, Duits"
}
```

### Update Aid Worker (Partial)
```
PATCH http://localhost:3000/api/aidworker/:id
Content-Type: application/json

{
  "woonplaats": "Utrecht",
  "leeftijd": 37
}
```

### Delete Aid Worker
```
DELETE http://localhost:3000/api/aidworker/:id
```

### Filter by City
```
GET http://localhost:3000/api/aidworker?city=Amsterdam
```

### Filter by Type
```
GET http://localhost:3000/api/aidworker?type=Juridische
```

## Refugee API Endpoints

### Get All Refugees
```
GET http://localhost:3000/api/refugee
```

### Get Refugee by ID
```
GET http://localhost:3000/api/refugee/:id
```

### Create New Refugee
```
POST http://localhost:3000/api/refugee
Content-Type: application/json

{
  "voornaam": "Ahmad",
  "achternaam": "Hassan",
  "geslacht": "Man",
  "leeftijd": 28,
  "landVanHerkomst": "Syria",
  "gesprokenTalen": "Arabisch, Engels",
  "woonplaats": "Amsterdam",
  "statusAanvraag": "In behandeling",
  "typeHulpNodig": "Huisvesting, Taalles",
  "contactEmail": "ahmad.hassan@example.com",
  "contactTelefoon": "+31612345678"
}
```

### Update Refugee (Full)
```
PUT http://localhost:3000/api/refugee/:id
Content-Type: application/json

{
  "voornaam": "Ahmad",
  "achternaam": "Hassan",
  "geslacht": "Man",
  "leeftijd": 29,
  "landVanHerkomst": "Syria",
  "gesprokenTalen": "Arabisch, Engels, Nederlands",
  "woonplaats": "Utrecht",
  "statusAanvraag": "Goedgekeurd",
  "typeHulpNodig": "Arbeidsbemiddeling",
  "contactEmail": "ahmad.hassan@example.com",
  "contactTelefoon": "+31612345678"
}
```

### Update Refugee (Partial)
```
PATCH http://localhost:3000/api/refugee/:id
Content-Type: application/json

{
  "statusAanvraag": "Goedgekeurd",
  "woonplaats": "Rotterdam"
}
```

### Delete Refugee
```
DELETE http://localhost:3000/api/refugee/:id
```

### Filter by Country
```
GET http://localhost:3000/api/refugee?country=Syria
```

### Filter by City
```
GET http://localhost:3000/api/refugee?city=Amsterdam
```

### Filter by Status
```
GET http://localhost:3000/api/refugee?status=Goedgekeurd
```

## Example Response

### Aid Worker Response
```json
[
  {
    "nr": 1,
    "voornaam": "Bram",
    "achternaam": "Visser",
    "geslacht": "Man",
    "typeHulpverlening": "Juridische ondersteuning",
    "leeftijd": 45,
    "woonplaats": "Amsterdam",
    "gesprokenTalen": "Nederlands, Engels, Duits"
  }
]
```

### Refugee Response
```json
[
  {
    "id": 1,
    "voornaam": "Ahmad",
    "achternaam": "Hassan",
    "geslacht": "Man",
    "leeftijd": 28,
    "landVanHerkomst": "Syria",
    "gesprokenTalen": "Arabisch, Engels",
    "woonplaats": "Amsterdam",
    "statusAanvraag": "In behandeling",
    "typeHulpNodig": "Huisvesting, Taalles",
    "contactEmail": "ahmad.hassan@example.com",
    "contactTelefoon": "+31612345678",
    "aangemaakt": "2025-12-18T10:30:00.000Z",
    "bijgewerkt": "2025-12-18T10:30:00.000Z"
  }
]
```
