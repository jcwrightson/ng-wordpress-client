# ngWordPressClient

Angular 4.x JavaScript Client for WordPress Headless CMS (Read Only).

Requires WordPress 4.7 or the wp-rest-api V2 plugin


# Quick Configuration

  - Rename `app-cfg-sample.json` to `app-cfg.json`
  - Set `wp-url` to the URL of your WordPress site
  - To enable logging set `enable-debugging` to `true`
 
 
# Directives

To display WordPress posts within your project just include the directive: `<wp-posts></wp-posts>` within your template. This will show all published posts, in a list format following default settings.

# Posts Options (Basic)

A number of options are available should you need to filter the posts in a static way. These options are intended for static parts of a site that need to always show posts of a certain type / category etc. For more dynamic filtering see the REST approach.

Get all posts, filter by category: `<wp-posts [postCat]="'category'"></wp-posts>`

Get all posts, filter by tag: `<wp-posts [postTag]="'tag'"></wp-posts>`

Get all posts, filter by category and tag: `<wp-posts [postCat]="'category'" [postTag]="'tag'"></wp-posts>`

While the above examples show literal strings, by removing the `''` these options will accept a variable.

# usage (REST)

`/` retrieves all posts

`/:year/:month/:slug` retrieves a single post

`/:cpt` retrieves all of custom post type

`/:cpt/:slug` retrieves single post of custom type

