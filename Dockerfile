FROM php:7.2.14-apache

RUN apt-get update
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
