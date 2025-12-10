export type BlogPostParams = {
  // Parâmetros de paginação
  page?: number;               // Número da página (começa em 1)
  per_page?: number;           // Número de itens por página
  offset?: number;             // Número de posts a ignorar antes de retornar resultados

  // Parâmetros de ordenação
  order?: 'asc' | 'desc';      // Ordem dos resultados (ascendente ou descendente)
  orderby?: 'date' | 'relevance' | 'id' | 'include' | 'title' | 'slug'; // Campo para ordenar

  // Filtros de busca
  search?: string;             // String de busca para filtrar posts pelo título ou conteúdo

  // Filtros por taxonomias
  categories?: number | number[];    // ID(s) das categorias
  tags?: number | number[];          // ID(s) das tags
  categories_exclude?: number[];     // ID(s) das categorias a excluir
  tags_exclude?: number[];           // ID(s) das tags a excluir

  // Filtros por autor
  author?: number | number[];        // ID(s) dos autores
  author_exclude?: number[];         // ID(s) dos autores a excluir

  // Filtros por status
  status?: 'publish' | 'future' | 'draft' | 'pending' | 'private'; // Status do post

  // Outros parâmetros
  exclude?: number[];          // ID(s) dos posts a excluir
  include?: number[];          // ID(s) específicos dos posts a incluir
  slug?: string;               // Slug único do post
  sticky?: boolean;            // Somente posts fixados (ou não fixados)
}

export type WordpressPost = {
  id: number; // ID do post
  date: string; // Data de publicação (formato ISO 8601)
  date_gmt: string; // Data de publicação no horário GMT
  guid: {
    rendered: string; // GUID do post
  };
  modified: string; // Data da última modificação
  modified_gmt: string; // Data da última modificação no horário GMT
  slug: string; // Slug do post
  status: string; // Status do post (ex.: "publish")
  type: string; // Tipo do post (ex.: "post", "page")
  link: string; // Link público para o post
  title: {
    rendered: string; // Título renderizado em HTML
  };
  content: {
    rendered: string; // Conteúdo do post renderizado em HTML
    protected: boolean; // Indica se o conteúdo está protegido
  };
  excerpt: {
    rendered: string; // Resumo do post renderizado em HTML
    protected: boolean; // Indica se o resumo está protegido
  };
  author: number; // ID do autor
  featured_media: number; // ID da mídia destacada (se houver)
  comment_status: string; // Status de comentários (ex.: "open", "closed")
  ping_status: string; // Status de pings (ex.: "open", "closed")
  sticky: boolean; // Indica se o post é fixado
  template: string; // Template usado pelo post
  format: string; // Formato do post (ex.: "standard")
  meta: any[]; // Metadados personalizados
  categories: number[]; // IDs das categorias associadas
  tags: number[]; // IDs das tags associadas
  _links: {
    self: Array<{ href: string }>; // Links relacionados ao post
    collection: Array<{ href: string }>; // Links para a coleção de posts
    about: Array<{ href: string }>; // Links para informações adicionais
    author: Array<{ embeddable: boolean; href: string }>; // Links para o autor
    replies: Array<{ embeddable: boolean; href: string }>; // Links para comentários
    'version-history': Array<{ count: number; href: string }>; // Histórico de revisões
    'predecessor-version'?: Array<{ id: number; href: string }>; // Versão anterior (se houver)
    'wp:featuredmedia'?: Array<{ embeddable: boolean; href: string }>; // Mídia destacada
    'wp:attachment': Array<{ href: string }>; // Anexos do post
    'wp:term': Array<{ taxonomy: string; embeddable: boolean; href: string }>; // Termos (categorias, tags)
    curies?: Array<{ name: string; href: string; templated: boolean }>; // Links compactos
  };
}

export type WordpressMedia = {
  id: number; // ID único da mídia
  date: string; // Data de criação (formato ISO 8601)
  date_gmt: string; // Data de criação no horário GMT
  slug: string; // Slug da mídia
  status: string; // Status da mídia (ex.: "inherit")
  type: string; // Tipo do post (ex.: "attachment")
  link: string; // URL pública para a mídia
  title: {
    rendered: string; // Título da mídia
  };
  author: number; // ID do autor que fez o upload
  comment_status: string; // Status de comentários (ex.: "open", "closed")
  ping_status: string; // Status de pingbacks
  template: string; // Template associado (geralmente vazio)
  meta: any[]; // Metadados personalizados
  description: {
    rendered: string; // Descrição da mídia (HTML renderizado)
  };
  caption: {
    rendered: string; // Legenda da mídia (HTML renderizado)
  };
  alt_text: string; // Texto alternativo da imagem
  media_type: string; // Tipo de mídia (ex.: "image", "file")
  mime_type: string; // Tipo MIME (ex.: "image/jpeg")
  media_details: {
    width?: number; // Largura da imagem (em pixels)
    height?: number; // Altura da imagem (em pixels)
    file: string; // Nome do arquivo
    sizes?: {
      [size: string]: {
        file: string; // Nome do arquivo para este tamanho
        width: number; // Largura neste tamanho
        height: number; // Altura neste tamanho
        mime_type: string; // Tipo MIME
        source_url: string; // URL da imagem neste tamanho
      };
    };
    image_meta?: {
      aperture: string; // Configuração de abertura
      credit: string; // Créditos
      camera: string; // Modelo da câmera
      caption: string; // Legenda da imagem
      created_timestamp: string; // Timestamp de criação
      copyright: string; // Informações de copyright
      focal_length: string; // Comprimento focal
      iso: string; // Configuração de ISO
      shutter_speed: string; // Velocidade do obturador
      title: string; // Título da imagem
      orientation: string; // Orientação
      keywords: string[]; // Palavras-chave associadas
    };
  };
  source_url: string; // URL completa da mídia original
  _links: {
    self: Array<{ href: string }>; // Links para o recurso
    collection: Array<{ href: string }>; // Links para a coleção de mídias
    about: Array<{ href: string }>; // Links para informações adicionais
    author: Array<{ embeddable: boolean; href: string }>; // Links para o autor
    replies: Array<{ embeddable: boolean; href: string }>; // Links para comentários
  };
}

export type PostCard = {
  id: number
  title: string
  image: string
}
