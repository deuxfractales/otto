#!/bin/bash

cd frontend
npm run build
cd dist
caddy file-server --domain 155.138.159.31
