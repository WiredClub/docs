# Wired Club Docs

Documentação Wired feita pela comunidade **Wired Club**, o maior portal Wired do Brasil!

Construído com [Starlight](https://starlight.astro.build/).

## Instalação

```bash
# Clone o repositório
git clone https://github.com/wiredclub/docs
cd wired-docs

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:4321`

## Estrutura

```
wired-docs/
├── src/
│   ├── assets/
│   │   └── new_logo.ong              # Logo do Wired Club
│   ├── content/
│   │   └── docs/
│   │       ├── index.mdx             # Página inicial (hero)
│   │       ├── vamos-comecer/
│   │       │   ├── introducao.mdx
│   │       │   ├── como-fundiona.mdx
│   │       │   └── perguntas-frequentes.md
│   │       ├── referencia/
│   │       │   ├── glossario.mdx
│   │       │   ├── tipos-de-wireds.md
│   │       │   └── ...
│   │       └── .../
│   └── components/
│       └── PageReader.astro          # Componentes customizados
├── astro.config.mjs
└── package.json
```

## Adicionando conteúdo

Crie arquivos `.md` ou `.mdx` em `src/content/docs/` e eles aparecerão automaticamente. Configure o frontmatter:

```yaml
---
title: Título da Página
description: Descrição para SEO
---
```

Adicione a página ao sidebar em `astro.config.mjs`.

## Scripts

| Comando | Ação |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Build de produção em `./dist/` |
| `npm run preview` | Preview da build de produção |

### Comprimir vídeos

O script [`scripts/compress-videos.sh`](scripts/compress-videos.sh) procura arquivos `.mp4` na pasta em que você o executa, incluindo as subpastas. Ele grava os resultados em uma pasta `optimized/` nesse mesmo local, sem alterar os vídeos originais. Se a versão comprimida ficar maior ou do mesmo tamanho, o script copia o arquivo original para `optimized/`.

1. Instale o [FFmpeg](https://ffmpeg.org/download.html) e deixe o comando `ffmpeg` disponível no terminal. No macOS, use o Terminal. No Windows, instale também o [Git for Windows](https://git-scm.com/install/windows) e abra o **Git Bash** para executar os próximos comandos.
2. Confira se o FFmpeg está acessível e oferece o codificador `libx265`, usado pelo script:

   ```bash
   ffmpeg -version
   ffmpeg -encoders | grep libx265
   ```

   O segundo comando deve mostrar uma linha com `libx265`. Se não mostrar, instale uma versão do FFmpeg que inclua esse codificador.
3. Na raiz do repositório, entre na pasta dos vídeos que deseja comprimir. Por exemplo:

   ```bash
   cd src/assets/wf_act_place_furni
   ```

4. Execute o script a partir dessa pasta:

   ```bash
   bash ../../../scripts/compress-videos.sh
   ```

5. Confira os arquivos em `optimized/` e teste sua reprodução. Se estiverem corretos, substitua os originais pelos arquivos correspondentes, mantendo os mesmos nomes e caminhos. A pasta `optimized/` é apenas a saída temporária: não a inclua no commit.

Antes de executar o script novamente na mesma pasta, retire a `optimized/` da execução anterior. O FFmpeg não sobrescreve automaticamente os arquivos que já estiverem nela.

## Contribuindo

Você pode contribuir localmente clonando o repositório, ou diretamente no navegador usando o **VS Code Web** (pressionando a tecla **`.`** na página do repositório no GitHub).

1. Fork o repositório
2. Crie sua branch: `git checkout -b feature/nova-pagina` (ou pelo painel Source Control no VS Code Web)
3. Commit suas mudanças: `git commit -m 'docs: adiciona guia de X'`
4. Push: `git push origin feature/nova-pagina`
5. Abra um Pull Request

Para mais detalhes, veja o [Guia Completo de Como Contribuir](src/content/docs/sobre-nos/como-contribuir.mdx).

## Licença

Este projeto é um fã site independente. Não é afiliado à Sulake Oy.
Conteúdo sob licença [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

---

Desenvolvido com ❤️ pela equipe Wired Club | [wiredclub.com.br](https://wiredclub.com.br)
