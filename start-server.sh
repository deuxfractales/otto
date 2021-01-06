#!/bin/bash

cd frontend/dist
npm run build
caddy file-server --domain 155.138.159.31
