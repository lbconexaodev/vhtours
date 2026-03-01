# VH Tours - Arquitetura e Operação

## 1) Visão geral
- Stack: `React 18 + Vite + TypeScript + Tailwind + Framer Motion`.
- Roteamento: `react-router-dom` com `basename="/vhtours"`.
- Estado global leve: `LanguageContext` (idioma).
- Dados dinâmicos: seção de pacotes via `vhApi`.
- UI base: componentes em `src/components/ui` (shadcn/radix).

## 2) Estrutura principal
- `src/main.tsx`: bootstrap da aplicação.
- `src/App.tsx`: providers globais + rotas.
- `src/pages/Index.tsx`: página principal (landing).
- `src/pages/Admin.tsx`: área administrativa.
- `src/pages/NotFound.tsx`: rota fallback.
- `src/components/*`: blocos de seção (hero, benefícios, pacotes, pagamento, etc.).
- `src/lib/vhApi.ts`: integração de dados para pacotes.
- `src/i18n/*`: traduções e contexto de idioma.
- `src/index.css`: tokens visuais globais e estilos base.

## 3) Fluxo de renderização
1. `main.tsx` monta `App`.
2. `App` injeta:
- `QueryClientProvider`
- `LanguageProvider`
- `TooltipProvider`
- `Toaster/Sonner`
3. Rotas renderizam páginas:
- `/` -> `Index`
- `/admin` -> `Admin`
4. `Index` compõe seções em ordem vertical (Navbar -> Hero -> ... -> Footer).

## 4) Fluxo de dados
- Pacotes:
  - `PackagesSection` chama `fetchPackages()` em `useEffect`.
  - Estados locais: `loading`, `error`, `packages`.
  - Falha de API não quebra página, apenas mostra mensagem.
- Idioma:
  - `LanguageContext` fornece `t(...)` e `setLanguage(...)`.
  - Componentes consomem tradução sem acoplamento com API.

## 5) Convenções visuais atuais
- Tema principal em `src/index.css` usando CSS variables.
- Fundo global com leve tom roxo.
- Cards premium aplicados em pagamentos e WhatsApp promo.
- Efeito "flor abrindo" no Hero.
- Floating cards:
  - `FloatingBrandBadge` (branding)
  - `WhatsAppButton` (atalho de contato)

## 6) Limpeza e segurança aplicadas
- `src/App.css` removido (arquivo legado sem uso).
- `backup/` adicionado ao `.gitignore` para não subir peso local.
- Mantida compatibilidade com build atual.

## 7) Como preparar para subir/atualizar no GitHub
1. Validar local:
```bash
npm ci
npm run build
```
2. Revisar mudanças:
```bash
git status
git diff
```
3. Commit:
```bash
git add .
git commit -m "feat: ajustes visuais, limpeza segura e documentação de arquitetura"
```
4. Enviar:
```bash
git push origin <sua-branch>
```
5. Se fluxo for `main` direto:
```bash
git push origin main
```

## 8) Checklist pré-deploy
- Build OK (`npm run build`).
- Rotas funcionando com `basename="/vhtours"`.
- Seção de pacotes carregando dados sem erro.
- Ícones de pagamento visíveis.
- Cards flutuantes sem sobreposição crítica em desktop/mobile.
- Links externos (WhatsApp/linkfly) válidos.

## 9) Riscos conhecidos
- `npm run lint` possui erros legados em arquivos de UI base não relacionados ao fluxo principal.
- Correção desses erros deve ser tratada em tarefa dedicada para evitar ruído em releases visuais.
