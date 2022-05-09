FROM denoland/deno:1.21.2
EXPOSE 3000
WORKDIR /app
USER deno
COPY . .
RUN deno cache ./src/index.ts
CMD ["run", "--allow-all", "./src/index.ts"]
