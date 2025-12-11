<?php get_header(); ?>
<main class="container blog-page">
  <h2>Mais recente</h2>
  <?php
  $latest = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 1,
    'ignore_sticky_posts' => true,
  ]);
  if ($latest->have_posts()) :
    while ($latest->have_posts()) : $latest->the_post();
      $image = get_the_post_thumbnail_url(get_the_ID(), 'large');
      if (!$image) {
        $image = get_template_directory_uri() . '/assets/post-2.png';
      }
      ?>
      <a class="latest-post d-block" href="<?php the_permalink(); ?>">
        <img src="<?php echo esc_url($image); ?>" alt="" />
        <h3><?php the_title(); ?></h3>
        <strong>Ler mais</strong>
      </a>
      <?php
    endwhile;
    wp_reset_postdata();
  endif;
  ?>

  <div class="sub-title d-flex justify-content-between align-items-center mt-4">
    <h3>Todos os posts</h3>
    <?php get_search_form(); ?>
  </div>

  <?php
  $paged = max(1, get_query_var('paged'));
  $query = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 9,
    'paged' => $paged,
    'ignore_sticky_posts' => true,
  ]);
  ?>

  <?php if ($query->have_posts()) : ?>
    <div class="posts">
      <?php while ($query->have_posts()) : $query->the_post(); ?>
        <a class="post d-block" href="<?php the_permalink(); ?>">
          <?php
          $thumb = get_the_post_thumbnail_url(get_the_ID(), 'medium');
          if (!$thumb) {
            $thumb = get_template_directory_uri() . '/assets/post-2.png';
          }
          ?>
          <img src="<?php echo esc_url($thumb); ?>" alt="" />
          <p><?php the_title(); ?></p>
          <strong>Ler mais</strong>
        </a>
      <?php endwhile; ?>
    </div>
    <div class="pagination">
      <?php echo paginate_links(['total' => $query->max_num_pages]); ?>
    </div>
    <?php wp_reset_postdata(); ?>
  <?php else : ?>
    <div>
      <span>Não há posts</span>
    </div>
  <?php endif; ?>
</main>
<?php get_footer(); ?>
