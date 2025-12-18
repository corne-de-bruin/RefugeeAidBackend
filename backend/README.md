# Hackathon Backend

NestJS backend application that serves data from the Dataset.csv file via REST API.

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

### Get All Data
```
GET http://localhost:3000/api/aidworker
```

### Get Data by ID
```
GET http://localhost:3000/api/aidworker/:id
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
