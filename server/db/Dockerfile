FROM mysql:5.7

RUN mkdir -p /docker-entrypoint-initdb.d

ENV MYSQL_ALLOW_EMPTY_PASSWORD yes

COPY data/*.sql /docker-entrypoint-initdb.d/

EXPOSE 3306