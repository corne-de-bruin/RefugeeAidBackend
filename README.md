# Refugee Aid Backend

A comprehensive NestJS backend application for managing aid workers and refugees. The application provides a RESTful API with full CRUD operations, database persistence, and interactive API documentation.

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database](#database)
- [API Endpoints](#api-endpoints)

## ✨ Features

- **Dual Resource Management**: Complete CRUD operations for both aid workers and refugees
- **SQLite Database**: Lightweight, file-based database with TypeORM for data persistence
- **Auto-seeding**: Automatically loads aid worker data from CSV file on first startup
- **REST API**: RESTful endpoints following best practices
- **Advanced Filtering**: Query by city, type of assistance, country of origin, and application status
- **Swagger Documentation**: Interactive API documentation with Swagger UI
- **OpenAPI Specification**: Auto-generated OpenAPI 3.0 spec for client generation
- **TypeScript**: Fully typed codebase for better developer experience
- **CORS Enabled**: Ready for frontend integration

## 🛠 Technology Stack

- **Framework**: NestJS 10.x
- **Language**: TypeScript 5.x
- **Database**: SQLite 3.x
- **ORM**: TypeORM 0.3.x
- **Documentation**: Swagger/OpenAPI
- **CSV Parser**: csv-parser 3.x

## 📁 Project Structure

```
Hackathon/
├── src/
│   ├── aid-worker/          # Aid worker module
│   │   ├── dto/            # Data transfer objects
│   │   ├── aid-worker.controller.ts
│   │   ├── aid-worker.service.ts
│   │   ├── aid-worker.entity.ts
│   │   ├── aid-worker.module.ts
│   │   └── database-seeder.service.ts
│   ├── refugee/            # Refugee module
│   │   ├── dto/            # Data transfer objects
│   │   ├── refugee.controller.ts
│   │   ├── refugee.service.ts
│   │   ├── refugee.entity.ts
│   │   └── refugee.module.ts
│   ├── app.module.ts       # Root application module
│   └── main.ts             # Application entry point
├── dataset/
│   └── Dataset.csv         # Initial aid worker data
├── docs/
│   ├── README.md           # API documentation guide
│   └── openapi.json        # Auto-generated OpenAPI spec
├── dist/                   # Compiled output
├── database.sqlite         # SQLite database file
└── package.json

## 🚀 Installation

```bash
npm install
```

## 🚀 Installation

```bash
npm install
```

## 🏃 Running the Application

```bash
# Development mode with auto-reload
npm run start:dev

# Production build
npm run build

# Production mode
npm run start:prod

# Linting
npm run lint

# Format code
npm run format
```

The application will start on `http://localhost:3000`

**On first startup:**
- Creates `database.sqlite` file
- Automatically seeds aid worker data from `dataset/Dataset.csv`
- Generates OpenAPI specification in `docs/openapi.json`

## 📚 API Documentation

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

## 📚 API Documentation

### Swagger UI (Interactive)

Access the interactive Swagger documentation at:

**🔗 http://localhost:3000/api/docs**

The Swagger UI provides:
- ✅ **Interactive API Testing** - Try out all endpoints directly from the browser
- 📝 **Request/Response Examples** - See example payloads for all operations
- 📊 **Schema Definitions** - View all data models and their properties
- 📖 **Parameter Descriptions** - Understand what each field requires
- 🏷️ **Organized by Tags** - Aid Worker and Refugee endpoints clearly separated

### OpenAPI Specification

The OpenAPI 3.0 JSON specification is automatically generated on server startup:

```
docs/openapi.json
```

**Use cases:**
- 🔧 Generate client SDKs in multiple languages (TypeScript, Python, Java, etc.)
- 📥 Import into API testing tools (Postman, Insomnia, Thunder Client)
- 📄 Share API contracts with frontend developers
- 🔌 Integrate with API gateways and monitoring tools

See `docs/README.md` for detailed documentation usage instructions.

## 💾 Database

### Schema

**Aid Workers Table** (`aid_workers`)
- `id` - Auto-generated primary key
- `nr` - Unique identifier number
- `voornaam` - First name
- `achternaam` - Last name
- `geslacht` - Gender
- `typeHulpverlening` - Type of assistance provided
- `leeftijd` - Age
- `woonplaats` - City
- `gesprokenTalen` - Spoken languages

**Refugees Table** (`refugees`)
- `id` - Auto-generated primary key
- `voornaam` - First name
- `achternaam` - Last name
- `geslacht` - Gender
- `leeftijd` - Age
- `landVanHerkomst` - Country of origin
- `gesprokenTalen` - Spoken languages
- `woonplaats` - Current city (optional)
- `statusAanvraag` - Application status (optional)
- `typeHulpNodig` - Type of assistance needed (optional)
- `contactEmail` - Contact email (optional)
- `contactTelefoon` - Contact phone (optional)
- `aangemaakt` - Created timestamp (auto)
- `bijgewerkt` - Updated timestamp (auto)

### Database File

Location: `database.sqlite`

The database is automatically created and managed by TypeORM. The `synchronize: true` option ensures the schema is auto-updated during development.

## 🔌 API Endpoints

### Aid Worker API (`/api/aidworker`)

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| GET | `/api/aidworker` | Get all aid workers | `?city=`, `?type=` |
| GET | `/api/aidworker/:id` | Get aid worker by ID | - |
| POST | `/api/aidworker` | Create new aid worker | - |
| PUT | `/api/aidworker/:id` | Full update | - |
| PATCH | `/api/aidworker/:id` | Partial update | - |
| DELETE | `/api/aidworker/:id` | Delete aid worker | - |

### Refugee API (`/api/refugee`)

| Method | Endpoint | Description | Query Params |
|--------|----------|-------------|--------------|
| GET | `/api/refugee` | Get all refugees | `?country=`, `?city=`, `?status=` |
| GET | `/api/refugee/:id` | Get refugee by ID | - |
| POST | `/api/refugee` | Create new refugee | - |
| PUT | `/api/refugee/:id` | Full update | - |
| PATCH | `/api/refugee/:id` | Partial update | - |
| DELETE | `/api/refugee/:id` | Delete refugee | - |

## 📝 Example Requests

### Create Aid Worker
## 📝 Example Requests

### Create Aid Worker

```bash
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

### Create Refugee

```bash
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

### Filter Examples

```bash
# Get aid workers in Amsterdam
GET http://localhost:3000/api/aidworker?city=Amsterdam

# Get aid workers providing legal support
GET http://localhost:3000/api/aidworker?type=Juridische

# Get refugees from Syria
GET http://localhost:3000/api/refugee?country=Syria

# Get refugees with approved status
GET http://localhost:3000/api/refugee?status=Goedgekeurd
```

### Update Examples

```bash
# Partial update aid worker
PATCH http://localhost:3000/api/aidworker/1
Content-Type: application/json

{
  "woonplaats": "Utrecht",
  "leeftijd": 37
}

# Partial update refugee
PATCH http://localhost:3000/api/refugee/1
Content-Type: application/json

{
  "statusAanvraag": "Goedgekeurd",
  "woonplaats": "Rotterdam"
}
```

## 📤 Example Responses

### Aid Worker Response

```json
{
  "id": 1,
  "nr": 1,
  "voornaam": "Bram",
  "achternaam": "Visser",
  "geslacht": "Man",
  "typeHulpverlening": "Juridische ondersteuning",
  "leeftijd": 45,
  "woonplaats": "Amsterdam",
  "gesprokenTalen": "Nederlands, Engels, Duits"
}
```

### Refugee Response

```json
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
```

## 🔧 Development

### Code Organization

The application follows NestJS modular architecture:
- **Modules**: Feature-based organization (aid-worker, refugee)
- **Controllers**: Handle HTTP requests and responses
- **Services**: Business logic and data access
- **Entities**: TypeORM database models
- **DTOs**: Data transfer objects with Swagger decorators

### Key Dependencies

```json
{
  "@nestjs/common": "^10.0.0",
  "@nestjs/core": "^10.0.0",
  "@nestjs/swagger": "^7.1.16",
  "@nestjs/typeorm": "^10.0.0",
  "typeorm": "^0.3.17",
  "sqlite3": "^5.1.6",
  "csv-parser": "^3.0.0"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙋 Support

For issues, questions, or contributions, please open an issue on the repository.

---

**Built with ❤️ using NestJS**
