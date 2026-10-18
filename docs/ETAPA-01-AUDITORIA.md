# Etapa 01 — Auditoria técnica

Status: EM ANDAMENTO / NÃO APROVADA PARA AVANÇAR.

## Confirmado
- Código inicial Next.js, React, TypeScript e GSAP presente no repositório.
- Home editorial, hero, galeria e estudo conceitual de engenharia implementados no código.
- Conteúdo e fotografias são demonstrativos; não atribuir imagens a projetos da Haymour.

## Pendente de comprovação
- `npm ci`/`npm install`, `npm run build` e verificação de TypeScript.
- Teste de navegação e responsividade em dispositivos reais.
- Testes de animação com e sem movimento reduzido.
- Prévia Vercel acessível.
- Auditoria de acessibilidade do modal e da navegação por teclado.

## Riscos arquiteturais
1. `Experience.tsx` concentra todas as seções e timelines: modularizar antes de implementar a galeria Z-Path.
2. Fotografias externas sem autorização comprovada: manter protótipo privado e substituir por ativos autorizados.
3. Contato é apenas texto demonstrativo: não considerar funcionalidade implementada.
4. Galeria editorial atual não equivale à experiência espacial Z-Path.
5. Seção técnica atual não equivale a raio-X arquitetônico real.
6. Dependências usam intervalos sem lockfile: gerar e versionar `package-lock.json` após instalação validada.

## Portões de aprovação da etapa
- Build de produção concluído.
- Prévia navegável e testada em mobile e desktop.
- Sem erros críticos no console.
- Navegação por teclado e fechamento de modal testados.
- Experiências separadas em componentes com limpeza de animações.
- Avaliação de desempenho inicial registrada.

Não iniciar a etapa 02 até validar esses itens ou registrar explicitamente exceções justificadas.
