# Products catalog

Products catalog is a Rails project built using [VueJS](https://vuejs.org/) as frontend framework.

## Notes

* Make sure you have postgresql up and running
* Make sure you have yarn installed ( we use [asdf](https://github.com/asdf-vm/asdf) as version manager )
* Change the development ENV variables with the local DB credentials - `config/database.yml`

## Development Setup

1. Clone the repo:

        $ cd ~/projects
        $ git clone https://github.com/nebulab/products_catalog.git
        $ cd products_catalog

2. Install dependencies and prepare database:

        $ ./bin/setup

3. You're up and running. Just start the app as usual:

        $ bundle exec rails s
        $ ./bin/webpack-dev-server

4. Navigate the application locally:

http://localhost:3000

## Live!

https://workshop-products-catalog.herokuapp.com/
