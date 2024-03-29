#!/bin/bash

# Navigate to the library directory
cd libs/flib

# Build the library
nx build flib

# Copy the built library to the node_modules directory of your application
cp -r dist/libs/flib path/to/your/application/node_modules/flib

# Navigate to the application directory
cd path/to/your/application

# Build the application
nx build your-application-name