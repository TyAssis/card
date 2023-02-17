start:
	npm run start

create-migration:
	npm run db:create-migration -- --name card

migrate:
	npm run db:migrate

migrate-down:
	npm run db:migrate:down