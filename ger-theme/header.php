<?php
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php wp_head(); ?>
  <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/assets/favicon.png" />
</head>
<body <?php body_class(); ?>>
<header class="py-3">
  <nav class="d-flex container justify-content-between align-items-center position-relative">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="logo" class="img-fluid" />
    <ul class="d-flex nav-list">
      <li><a href="#hero">Início</a></li>
      <li><a href="#what-we-do">Sobre nós</a></li>
      <li><a href="#services">Serviços</a></li>
      <li><a href="#branches">Filias</a></li>
      <li><a href="#our-story">Nossa História</a></li>
      <li><a href="<?php echo esc_url(get_option('page_for_posts') ? get_permalink(get_option('page_for_posts')) : home_url('/')); ?>">Blog</a></li>
    </ul>
    <div class="mobile-options">
      <button class="btn btn-transp" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-label="Abrir menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
            <rect y="0.283936" width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0)">
            <path d="M3 21.2839V19.2839H21V21.2839H3ZM3 13.2839V11.2839H21V13.2839H3ZM3 5.28394V3.28394H21V5.28394H3Z" fill="#FEFFFF"/>
          </g>
        </svg>
      </button>
    </div>
  </nav>
</header>
<div class="offcanvas offcanvas-end" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="mobileMenuLabel">Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="nav flex-column">
      <li class="nav-item"><a class="nav-link" href="#hero" data-bs-dismiss="offcanvas">Início</a></li>
      <li class="nav-item"><a class="nav-link" href="#what-we-do" data-bs-dismiss="offcanvas">Sobre nós</a></li>
      <li class="nav-item"><a class="nav-link" href="#services" data-bs-dismiss="offcanvas">Serviços</a></li>
      <li class="nav-item"><a class="nav-link" href="#branches" data-bs-dismiss="offcanvas">Filias</a></li>
      <li class="nav-item"><a class="nav-link" href="#our-story" data-bs-dismiss="offcanvas">Nossa História</a></li>
      <li class="nav-item"><a class="nav-link" href="<?php echo esc_url(get_option('page_for_posts') ? get_permalink(get_option('page_for_posts')) : home_url('/')); ?>" data-bs-dismiss="offcanvas">Blog</a></li>
    </ul>
  </div>
</div>
