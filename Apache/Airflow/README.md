# Docker

# Airflow Development Environment

This repository contains a Docker Compose setup for running Apache Airflow with additional services including PostgreSQL, Redis, and ClickHouse.

## Services Included

- Apache Airflow 2.7.1 (Webserver, Scheduler, and Worker)
- PostgreSQL 13 (Metadata Database)
- Redis (Message Broker)
- ClickHouse (Data Warehouse)
- Airflow Exporter (Metrics Export)

## Prerequisites

- Docker
- Docker Compose
- Git

## Directory Structure

```
.
├── dags/           # My DAG files
├── logs/           # Airflow logs
├── plugins/        # Custom plugins
├── config/         # Custom configurations
├── clickhouse-data/# ClickHouse data
├── clickhouse-logs/# ClickHouse logs
└── compose.yml     # Docker Compose configuration
```

## Port Mappings

- Airflow Webserver: `8080`
- PostgreSQL: `5432`
- Redis: `6379`
- ClickHouse HTTP: `8123`
- ClickHouse Native: `9000`
- ClickHouse Interserver: `9009`
- Airflow Exporter: `9112`

## Getting Started

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Create the required directories:
   ```bash
   mkdir -p dags logs plugins config clickhouse-data clickhouse-logs
   ```

3. Start the services:
   ```bash
   docker compose up -d
   ```

4. Access the Airflow web interface:
   - URL: `http://localhost:8080`
   - Username: `admin`
   - Password: `admin`

## Service Credentials

### Airflow
- Username: `admin`
- Password: `admin`

### PostgreSQL
- Username: `airflow`
- Password: `airflow`
- Database: `airflow`
- Port: `5432`

### ClickHouse
- Username: `admin`
- Password: `admin`
- Database: `default`
- HTTP Port: `8123`
- Native Port: `9000`

## Health Checks

The services include health checks to ensure proper startup:
- PostgreSQL: Checks database connectivity every 5 seconds
- Redis: Performs ping test every 5 seconds

## Volume Management

The following persistent volumes are configured:
- `postgres-data`: PostgreSQL data
- `prometheus-data`: Prometheus metrics data
- `grafana-data`: Grafana dashboards and data
- Local volume mappings for Airflow and ClickHouse

## Monitoring

The setup includes Airflow Exporter (port 9112) for monitoring Airflow metrics.
**bitnami airflow exporter had been deprecated**

## Stopping the Environment

To stop all services:
```bash
docker compose down
```

To stop and remove all data (including volumes):
```bash
docker compose down -v
```

## Notes

- The Airflow environment uses CeleryExecutor for distributed task execution
- DAGs are paused by default upon creation
- Example DAGs are disabled by default
- All services are configured to restart automatically unless stopped manually

## Troubleshooting

If you encounter any issues:

1. Check service logs:
   ```bash
   docker compose logs [service-name]
   ```

2. Ensure all required ports are available and not used by other services

3. Verify that all required directories have proper permissions

## Security Notes

- Default credentials are used for development purposes
- Change all passwords in production environments
- The Fernet key is exposed in the compose file and should be changed in production


## License

This project is licensed under the MIT License - see the LICENSE file for details