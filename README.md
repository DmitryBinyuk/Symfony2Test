# Backend:
Instructions for deployment:

```
composer install
php app/console doctrine:database:create
php app/console doctrine:schema:update --force
php app/console doctrine:fixtures:load
```

Suggest implementation & performance optimization for lists with > 20k items:
- Don't use Doctrine Query builder and other sql wrappers, use clear SQL queries for persisting and fetching objects to database;
- Use Redis or Memcached for caching;
- Use pagination (or in ideal case use offset and limit SQL operators instead of KnpPaginatorBundle);
- If planned to use for example mainly fetching data operations from DB with only rare update/insert queries suggested MyISAM.