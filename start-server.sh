#!/bin/bash

cd frontend/dist
caddy file-server --domain 155.138.159.31
