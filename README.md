# full-stack take-home assignment

## Prerequisites

Docker Compose must be installed on your machine. If it is not installed, you can find the installation instructions for your specific operating system on the [Docker](https://www.docker.com/) website.

## Running the web server

Start the application services by running the following command:

```
docker compose up
```

The website will be available at `http://localhost:3000/`. When you are finished working with the services, stop them by running the following command:

```
docker compose down
```

## Seeding the database

Once you start the appliaction, you will need to seed the appliaction database. To do so, you will need to log into the container by running:

```
docker compose exec next bash
```

Then:

```
npx prisma db seed
```
## Prisma Command

npx prisma migrate dev --name add_new_fields

## PGAdmin

To connect to the database using PGAdmin, you need to extract the following details from your `.env` file:

- **Host**: `localhost`
- **Port**: `5432`
- **Username**: `postgres`
- **Password**: `secretpassword`
- **Database**: `immunefi`

In PGAdmin, you would enter these details in the "New Server Registration" dialog:

1. **Name**: (Any name you prefer for this connection)
2. **Host name/address**: `localhost`
3. **Port**: `5432`
4. **Maintenance database**: `immunefi`
5. **Username**: `postgres`
6. **Password**: `secretpassword`

This will allow you to connect to your PostgreSQL database using PGAdmin.


