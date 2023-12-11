# Basis image vi bygger videre på
FROM node:18-alpine
# Kopier alt fra det nuværende directory, til Dockers "working directory"
# ("." betyder basicly "her hvor jeg er")
COPY . .
# Installer de nødvendige packages/dependencies
RUN npm install --production
# Deklarer hvilken port containeren burde publish
EXPOSE 3000
# Kør/Start vores service
CMD ["node", "app.js"]