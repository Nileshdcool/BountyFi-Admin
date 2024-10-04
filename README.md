```md
# Full-Stack Take-Home Assignment

This project contains a full-stack web application with a PostgreSQL database, designed to be run inside Docker containers using Docker Compose.

## Prerequisites

Ensure that Docker Compose is installed on your machine. If not, you can find the installation instructions for your specific operating system on the [Docker](https://www.docker.com/) website.

## Getting Started

Follow the steps below to set up and run the application locally.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Start the Application

To start the application and all required services, run the following command:

```bash
docker compose up
```

Once the services are up, the application will be accessible at:

```
http://localhost:3000/
```

### 3. Stop the Application

To stop the application and its services, run:

```bash
docker compose down
```

## Database Setup

### 1. Seeding the Database

After starting the application, seed the database by following these steps:

- Log into the `next` container:

  ```bash
  docker compose exec next bash
  ```

- Run the following command to seed the database:

  ```bash
  npx prisma db seed
  ```

### 2. Apply Prisma Migrations

To apply any new migrations to the database schema, use the following command:

```bash
npx prisma migrate dev --name add_new_fields
```

## PGAdmin Setup

To connect to the PostgreSQL database using PGAdmin, you will need the following details from your `.env` file:

- **Host**: `localhost`
- **Port**: `5432`
- **Username**: `postgres`
- **Password**: `secretpassword`
- **Database**: `immunefi`

### Steps to Connect:

1. Open PGAdmin and add a new server.
2. In the "New Server Registration" dialog, enter the following:
   - **Name**: (Any name of your choice)
   - **Host name/address**: `localhost`
   - **Port**: `5432`
   - **Maintenance database**: `immunefi`
   - **Username**: `postgres`
   - **Password**: `secretpassword`

This will connect you to your local PostgreSQL database.

## Conclusion

You should now have the application up and running locally, with the ability to interact with the PostgreSQL database. If you run into any issues, check the logs produced by Docker Compose for troubleshooting.
```
