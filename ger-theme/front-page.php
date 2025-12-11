<?php get_header(); ?>
<main>
  <section id="hero">
    <div class="container">
      <div class="texts">
        <span>G&R Soluções Agropecuárias</span>
        <h1>
          <span>Crédito Rural,</span> Consórcio e<br />
          Topografia: soluções estratégicas<br />
          para o <span>Agronegócio.</span>
        </h1>
        <p>
          Quer alavancar sua propriedade?<br />
          Entre em contato conosco.
        </p>
        <a class="btn btn-transp" href="#contact">Entrar em contato!</a>
      </div>
    </div>
    <img class="home-img" src="<?php echo get_template_directory_uri(); ?>/assets/home-img.png" alt="" />
    <div class="validations">
      <div>
        <h4>+3</h4>
        <span>Bilhões de credito liberado</span>
      </div>
      <div>
        <h4>+10</h4>
        <span>Anos de experiência</span>
      </div>
    </div>
  </section>
  <section id="what-we-do">
    <div class="container">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/what-we-do.jpeg" alt="Duas mulheres sorridentes vendo um notebook, letras abaixo na imagem dizendo produtor rural" />
      <div class="texts">
        <h2>O que fazemos:</h2>
        <p>
          Na G&R Soluções Agropecuárias, unimos conhecimento, estratégia e compromisso para impulsionar o agronegócio.
          Oferecemos soluções completas em Crédito Rural, Consórcio, Topografia e Regularização Ambiental, ajudando produtores a acessarem recursos,
          regularizarem suas propriedades e otimizarem suas operações. Nosso compromisso é fortalecer o agronegócio e contribuir para um desenvolvimento sustentável.
        </p>
        <a class="btn btn-transp" href="#contact">Entrar em contato!</a>
      </div>
    </div>
  </section>
  <section id="services">
    <div class="container">
      <div class="texts">
        <h2>Conheça os <br /> nossos <span>Serviços:</span></h2>
        <p>
          Com uma equipe qualificada e experiente,<br />
          atendemos às necessidades do produtor rural<br />
          com soluções práticas e personalizadas.
        </p>
        <a class="btn btn-transp" href="#services">Saiba mais</a>
      </div>
      <div class="cards">
        <div class="card">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/card-1.png" alt="" />
          <h4>Georreferenciamento de imóveis rurais</h4>
          <p>Organizamos e regularizamos propriedades, garantindo conformidade com as normas legais.</p>
        </div>
        <div class="card">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/card-2.png" alt="" />
          <h4>Elaboração de projetos de crédito rural</h4>
          <p>Desenvolvemos projetos técnicos para viabilizar financiamentos e melhorar a gestão rural.</p>
        </div>
        <div class="card">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/card-3.png" alt="" />
          <h4>Regularização de documentos rurais</h4>
          <p>Auxiliamos na organização de documentos essenciais para operações no campo.</p>
        </div>
        <div class="card">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/card-4.png" alt="" />
          <h4>Licença ambientais</h4>
          <p>Emitimos e regularizamos licenças para garantir sustentabilidade e cumprimento da legislação ambiental.</p>
        </div>
      </div>
    </div>
    <img class="bg" src="<?php echo get_template_directory_uri(); ?>/assets/services.png" alt="" />
  </section>
  <section id="branches">
    <div class="container">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/branches.png" class="main-image" alt="" />
      <div class="content">
        <h2>Para te atender:</h2>
        <div class="buttons">
          <a class="btn btn-transp" href="#">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/simple-logo.png" alt="" />
            Sede: Guanhaes
          </a>
          <a class="btn btn-transp" href="#">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/simple-logo.png" alt="" />
            Curvelo
          </a>
          <a class="btn btn-transp" href="#">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/simple-logo.png" alt="" />
            Virginópolis
          </a>
          <a class="btn btn-transp" href="#">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/simple-logo.png" alt="" />
            São Gotardo
          </a>
          <a class="btn btn-transp" href="#">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/simple-logo.png" alt="" />
            Capelinha
          </a>
          <a class="btn btn-transp" href="#">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/simple-logo.png" alt="" />
            Baixo Guandu
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="our-story">
    <div class="container">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/video-our-story.png" class="video" alt="" />
      <div class="texts">
        <h2>
          Saiba mais sobre
          <strong>A Nossa História</strong>
        </h2>
        <p>
          Desde a sua fundação, a G&R Soluções Agropecuárias tem como missão transformar o agronegócio brasileiro.
          Ao longo dos anos, evoluímos para atender às necessidades do produtor rural com serviços inovadores,
          tecnologia de ponta e uma equipe comprometida em oferecer soluções completas e personalizadas.
          <br />
          Hoje, com mais de uma década de experiência e presença em diversas regiões,
          seguimos com o mesmo propósito: apoiar o crescimento sustentável do agronegócio e
          fortalecer o setor rural.
        </p>
        <a class="btn btn-transp" href="#contact">Entrar em contato!</a>
      </div>
    </div>
  </section>
  <section id="blog">
    <div class="container">
      <h2>Mais publicações</h2>
      <?php
      $home_posts = new WP_Query([
        'post_type' => 'post',
        'posts_per_page' => 6,
        'ignore_sticky_posts' => true,
      ]);
      ?>
      <?php if ($home_posts->have_posts()) : ?>
        <div class="posts">
          <?php while ($home_posts->have_posts()) : $home_posts->the_post(); ?>
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
      <div class="d-flex justify-content-center">
        <a class="btn btn-green" href="<?php echo esc_url(get_option('page_for_posts') ? get_permalink(get_option('page_for_posts')) : get_post_type_archive_link('post')); ?>">Ver mais</a>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
