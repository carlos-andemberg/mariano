import Image from "next/image";
import { ArrowRight, Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Home() {
  const whatsappLink = "https://wa.me/5551995384950?text=Ol%C3%A1%2C%20quero%20melhorar%20as%20imagens%20do%20meu%20neg%C3%B3cio!";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      {/* Cabecalho */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-yellow-500 flex items-center justify-center text-black font-bold" aria-hidden="true">
              DS
            </div>
            <span className="font-bold text-lg tracking-tight">Creative</span>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 transition-colors px-4 py-2 rounded-full border border-white/10 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            aria-label="Falar com especialista no WhatsApp"
          >
            Fale com Especialista
          </a>
        </div>
      </header>

      {/* Secao Principal (Hero) */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center justify-center px-4 text-center">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-black to-black -z-10" aria-hidden="true" />
        
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-sm font-medium mb-2">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Mais Profissionalismo para sua Marca</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Imagens Ruins Afastam Clientes.<br />
            <span className="text-yellow-500">Nós Resolvemos Isso.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Ajudamos seu negócio a passar mais confiança através de imagens perfeitas. Restauramos fotos antigas, melhoramos a qualidade e criamos artes que chamam atenção na internet.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4 w-full">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 w-full sm:w-auto shadow-lg shadow-yellow-500/20 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              aria-label="Botão para falar no WhatsApp"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
              <MessageCircle className="w-5 h-5 relative z-10" aria-hidden="true" />
              <span className="relative z-10">Melhorar Minhas Imagens Agora</span>
            </a>
            
            <a
              href="#resultados"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-colors w-full sm:w-auto focus:ring-2 focus:ring-white/50 focus:outline-none"
            >
              Ver Nossos Resultados
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" aria-hidden="true" /> Qualidade Garantida</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" aria-hidden="true" /> Entrega Rápida</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-yellow-500" aria-hidden="true" /> Atendimento Personalizado</div>
          </div>
        </div>
      </section>

      {/* Secao Antes e Depois */}
      <section id="resultados" className="w-full py-16 md:py-24 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">A Diferença é <span className="text-yellow-500">Imediata</span></h2>
            <p className="text-gray-400">Toque na imagem (ou passe o mouse) para ver o resultado mágico.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restauracao de Foto Antiga */}
            <article className="flex flex-col gap-3">
              <div className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl" tabIndex={0} aria-label="Comparação de foto rasgada antes e depois da restauração">
                <Image src="/images/Rasgado.jpg" alt="Foto antiga rasgada antes da restauração" width={1142} height={1600} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto block" />
                <Image src="/images/Restaurado.png" alt="Foto antiga perfeitamente restaurada" width={1060} height={1484} sizes="(max-width: 768px) 100vw, 33vw" className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs sm:text-sm font-medium px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white">
                  <span>Antes</span>
                  <span className="text-yellow-400">Toque para ver o Depois</span>
                </div>
              </div>
              <h3 className="text-center font-bold text-lg text-white">Renovação de Fotos Antigas</h3>
              <p className="text-center text-gray-400 text-sm">Recuperamos as lembranças que o tempo estragou, tirando riscos e rasgos.</p>
            </article>

            {/* Melhoria de Qualidade/Nitidez */}
            <article className="flex flex-col gap-3">
              <div className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl" tabIndex={0} aria-label="Comparação de foto embaçada antes e depois de melhorar a nitidez">
                <Image src="/images/Sem nitidez.png" alt="Foto embaçada e sem qualidade" width={2080} height={2600} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto block" />
                <Image src="/images/Alta nitidez.png" alt="Foto com alta qualidade e nitidez perfeita" width={2080} height={2600} sizes="(max-width: 768px) 100vw, 33vw" className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs sm:text-sm font-medium px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white">
                  <span>Antes</span>
                  <span className="text-yellow-400">Toque para ver o Depois</span>
                </div>
              </div>
              <h3 className="text-center font-bold text-lg text-white">Melhoria de Qualidade</h3>
              <p className="text-center text-gray-400 text-sm">Sua foto está embaçada? Nós deixamos ela nítida e pronta para uso profissional.</p>
            </article>

            {/* Edicao Profissional */}
            <article className="flex flex-col gap-3">
              <div className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl" tabIndex={0} aria-label="Comparação de foto crua antes e depois da edição profissional">
                <Image src="/images/Antes.png" alt="Foto original sem tratamento" width={3264} height={4096} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto block" />
                <Image src="/images/Depois.png" alt="Foto com tratamento profissional de cores e luzes" width={3264} height={4096} sizes="(max-width: 768px) 100vw, 33vw" className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs sm:text-sm font-medium px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white">
                  <span>Antes</span>
                  <span className="text-yellow-400">Toque para ver o Depois</span>
                </div>
              </div>
              <h3 className="text-center font-bold text-lg text-white">Retoque Profissional</h3>
              <p className="text-center text-gray-400 text-sm">Cores vibrantes, pele perfeita e remoção de imperfeições da foto.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Portfolio de Artes */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Artes que chamam <span className="text-yellow-500">Atenção</span></h2>
              <p className="text-gray-400 max-w-xl">
                Criamos materiais de divulgação atrativos para suas redes sociais. Veja alguns exemplos de artes para Instagram, anúncios e promoções que produzimos.
              </p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white transition-colors flex items-center gap-2 font-medium bg-yellow-500/10 px-6 py-3 rounded-full md:bg-transparent md:px-0 md:py-0 md:rounded-none focus:outline-none focus:ring-2 focus:ring-yellow-500">
              Quero artes para meu negócio <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Galeria Responsiva (Mobile First: 1 coluna, Tablet: 2 colunas, PC: 3 colunas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Bloco 1: Campanhas de Vendas */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl text-white mb-2">Campanhas e Promoções</h3>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group bg-black">
                <Image src="/images/Promoção Moída.png" alt="Exemplo de arte para promoção de vendas" width={3240} height={5760} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto block" />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group bg-black">
                <Image src="/images/Marketing1.jpeg" alt="Exemplo de arte para marketing digital" width={1600} height={1600} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto block" />
              </div>
            </div>

            {/* Bloco 2: Posts para Redes Sociais */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-xl text-white mb-2">Posts para Redes Sociais</h3>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group bg-black">
                <Image src="/images/Post2.png" alt="Exemplo de post de destaque no feed" width={3375} height={4219} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto block" />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group bg-black">
                <Image src="/images/Máster-Post-Render.jpg" alt="Exemplo de postagem visualmente rica" width={2720} height={4096} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto block" />
              </div>
            </div>

            {/* Bloco 3: Stories e Destaques */}
            <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-xl text-white mb-2">Stories e Dia a Dia</h3>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group bg-black">
                <Image src="/images/Storys.png" alt="Exemplo de arte vertical para Stories" width={3375} height={6000} sizes="(max-width: 768px) 100vw, 33vw" className="w-full h-auto block" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="w-full py-20 md:py-28 relative overflow-hidden bg-yellow-500/5">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Chega de perder clientes pela aparência!</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Seu produto ou serviço é ótimo, a sua imagem precisa mostrar isso. Entre em contato agora e vamos transformar a cara do seu negócio.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 sm:py-6 bg-yellow-500 text-black text-lg sm:text-xl font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(234,179,8,0.3)] w-full sm:w-auto focus:ring-4 focus:ring-yellow-500/50 focus:outline-none"
            aria-label="Botão final para chamar no WhatsApp"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" aria-hidden="true" />
            <span className="relative z-10">Falar com David Saravia no WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Rodapé Obrigatório */}
      <footer className="w-full py-8 border-t border-white/10 bg-black text-center text-gray-500 text-sm flex flex-col items-center justify-center gap-2">
        <p>© {new Date().getFullYear()} DS Creative. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.carlosandemberg.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors font-semibold underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded px-1"
          >
            Carlos Andemberg
          </a>
        </p>
      </footer>
    </main>
  );
}
