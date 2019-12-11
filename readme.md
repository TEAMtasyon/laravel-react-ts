## Laravel with React TS

## Instructions

1. Clone this repo, create `.env` file based on `.env.example`, run `php artisan key:generate`, then run `composer install`;
   Make sure your storage file is writeable: `chmod -R 777 storage`
   Once the project creation procedure will be completed, run the `php artisan migrate` command to install the required tables.

2. go to frontend folder `cd frontend`
3. run `yarn` or `npm i`
   Then to run the project:
4. For dev: run `yarn start` or `npm run start` (You can set the backend url for laravel virtualhost inside package.json proxy - only for dev, to test api on the fly)

    For prod: run `yarn build` or `npm run build`

All the assets & files required for build will be copied to public directory of laravel. You can then create a VirtualHost that serves the laravel public directory
