<?php
add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  register_nav_menus([
    'primary' => 'Menu Principal',
  ]);
});

add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css', [], '5.3.6');
  wp_enqueue_style('ger-settings', get_theme_file_uri('settings.css'), ['bootstrap'], '1.0');
  wp_enqueue_style('ger-theme-blocks', get_theme_file_uri('theme.css'), ['bootstrap'], '1.0');
  wp_enqueue_style('ger-style', get_stylesheet_uri(), ['bootstrap'], '1.0.0');

  wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js', [], '5.3.6', true);
});

