# DS Creative 🎨

**DS Creative** é o portfólio e página de vendas de alto impacto para os serviços de design profissional e restauração de imagens de David Saravia. Este projeto foi concebido sob a premissa de *Mobile First*, garantindo navegação ultra-rápida, acessibilidade plena e técnicas comprovadas de UI/UX para altíssima taxa de conversão via WhatsApp.

## 🚀 Tecnologias e Stack
- **Next.js 16 (App Router)**: Framework React com Server-Side Rendering (SSR) otimizado.
- **Tailwind CSS v4 (Turbopack)**: Motor super rápido e leve para estilização, utilizando classes utilitárias fluídas sem uso de configurações deprecadas do PostCSS.
- **Next/Image**: Componente de otimização inteligente (WebP automático) servindo imagens super leves e preservando totalmente as texturas ricas de cada trabalho, anulando o temido *Cumulative Layout Shift* (CLS).
- **Lucide React**: Biblioteca de ícones vetoriais modernos.

## 🎯 Foco em Conversão
A interface foi projetada removendo pontos de fuga (distrações ou excesso de cliques). As exclusivas *Call to Actions* (CTAs) em contraste amarelo apontam ativamente para o funil de atendimento humano do WhatsApp de David Saravia. Segmentos de serviço expostos:
* Restauração de Fotos Antigas e Rasgadas
* Restauração de Qualidade e Nitidez em Fotos Embaçadas
* Correção Profissional de Cor e Luz
* Design voltado para engajamento em Redes Sociais (Stories, Feed, Campanhas)

## 💡 Destaques Técnicos, Acessibilidade e SEO
- **Imagens Não Cortadas (Uncropped + Optimized)**: Estrutura HTML/CSS adaptada para que as belas artes e materiais gráficos nunca percam qualidade e *aspect ratio* natural nos containers.
- **Acessibilidade Absoluta (A11y)**: Navegação por teclado habilitada via tabulações (`tabIndex`), suporte rico aos marcadores aria (`aria-label`, `aria-hidden`), contraste impecável AAA com fundo escuro e fontes legíveis. Nenhuma animação distratora ou zoom excessivo, garantindo total conforto no Mobile.
- **OpenGraph & Twitter Cards (SEO)**: Preparação completa nas Meta tags geradas via Server Side (SSG) pela URL canônica (`https://dscreative.duckdns.org/`). Toda e qualquer vez que esse link for enviado pelo Zap, Insta ou LinkedIn, irá puxar as thumbnails bonitas, título forte, descrições e autor.
- **Links Confiáveis**: Ligações externas protegidas usando as propriedades `target="_blank" rel="noopener noreferrer"`.

## 🖥️ Como Executar Localmente
Para rodar este projeto em seu ambiente e realizar testes:

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento ultra rápido do Turbopack
npm run dev
```

Logo após, acesse `http://localhost:3000`.

---
Desenvolvido por **[Carlos Andemberg](https://www.carlosandemberg.com.br)**
