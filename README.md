Basic script javascript using jquery to use the RSS Feed from wordpress 

- Remember to enable the cross domain access in wordpress custom functions file

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');  
```

- Adding the post thumbnail in the rss feed xml response 

```php

function featuredtoRSS($content) {
    global $post;
    if ( has_post_thumbnail( $post->ID ) ){
    $content = '<div>' . get_the_post_thumbnail( $post->ID, 'medium', array( 'style' => 'margin-bottom: 15px;' ) ) . '</div>' . $content;
    }
    return $content;
}
 
add_filter('the_excerpt_rss', 'featuredtoRSS');
add_filter('the_content_feed', 'featuredtoRSS');

```

# wordpress-rss-feed-jquery
