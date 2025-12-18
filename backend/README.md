# Hackathon Backend

NestJS backend application that serves data from the Dataset.csv file via REST API using SQLite database with TypeORM.

## Features

- **SQLite Database**: Lightweight database with TypeORM for data persistence
- **Auto-seeding**: Automatically loads CSV data into the database on first startup
- **REST API**: Full CRUD endpoints for aid worker data
- **Query Support**: Filter by city and type of assistance

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

## Example Response

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
