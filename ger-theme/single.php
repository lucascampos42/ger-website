<?php get_header(); ?>
<main id="post" class="single-post">
  <div class="container">
    <h1 class="post-title"><?php the_title(); ?></h1>
    <div class="post-content">
      <?php the_content(); ?>
    </div>
  </div>

  <section class="container mt-5">
    <h2>Mais publicações</h2>
    <?php
    $related = new WP_Query([
      'post_type' => 'post',
      'posts_per_page' => 6,
      'post__not_in' => [get_the_ID()],
      'ignore_sticky_posts' => true,
    ]);
    ?>
    <?php if ($related->have_posts()) : ?>
      <div class="posts">
        <?php while ($related->have_posts()) : $related->the_post(); ?>
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
      <?php wp_reset_postdata(); ?>
    <?php endif; ?>
  </section>
</main>
<?php get_footer(); ?>
