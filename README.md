# QR Code Generator

This is a simple QR Code Generator application that allows users to enter a URL and generate a QR code image.

## Prerequisites

Make sure you have Docker installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   cd qr-code-generator

2. build the docker image

     ```bash
         docker build -t qr-code-generator .

3. run the docker container

     ```bash
     docker run -p 3000:3000 qr-code-generator

4. Acces using browser at http://localhost:3000
