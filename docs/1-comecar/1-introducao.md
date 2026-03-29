# Introdução

{% hint style="info" %}
Esta documentação ainda está incompleta mas em constante atualização. Estamos focando em desenvolver conteúdo sobre os lançamentos e sobre as principais dores da comunidade.
{% endhint %}

### O que são os Wireds?

No **Habbo Hotel**, os **Wireds** são um sistema de programação dentro do jogo que permite automatizar ações e criar mecânicas interativas em quartos. Lançados em 2010, eles transformaram quartos estáticos em ambientes dinâmicos e programáveis.

Na prática, os Wireds funcionam como uma **programação visual**, qualquer jogador pode construir sistemas complexos sem precisar escrever uma linha de código.

### Como funcionam?

O funcionamento básico reside na lógica de **empilhamento**: a disposição física dos mobis no quarto determina a execução. Para que um sistema seja funcional, ele precisa de pelo menos um **Ativador** e um **Efeito**.

Quando o Ativador detecta um evento, ele dispara uma sequência de execução através da pilha. Se houver **Condições**, o sistema realiza a verificação e se os requisitos forem atendidos, os Efeitos são executados. Caso contrário, o execução é abortada.

#### Exemplo de pilha — teleporte com verificação de time

{% columns fullWidth="false" %}
{% column width="25%" %}

<div align="center" data-with-frame="true"><figure><img src="https://2032763373-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fto8buwU77BOLvqbI9scn%2Fuploads%2F6KX6pwGu5ZP2XSukmPWQ%2FF%C3%A3%20site%20100%25%20focado%20em%20Wired%20(200%20x%20200%20px).png?alt=media&#x26;token=351a5e5f-e8bf-4ee6-99ad-303e8cb0e3f7" alt=""><figcaption></figcaption></figure></div>
{% endcolumn %}

{% column width="75%" valign="middle" %}

* `EFEITO WIRED: Teleportar para Mobi`: executa a ação
* `CONDIÇÃO WIRED: Membro da Equipe`: valida o requisito
* `ATIVADOR WIRED: Habbo anda no Mobi`: dispara a execução
  {% endcolumn %}
  {% endcolumns %}

> **Dica:** Você pode ter múltiplos efeitos na mesma pilha. Todos eles serão agregados e executados quando o ativador for disparado e as condições forem satisfeitas.

### Os tipos de Wireds

O ecossistema Wired é dividido em seis categorias, identificadas visualmente pela cor dos mobis. Cada categoria tem um papel específico na arquitetura de uma pilha.

<table><thead><tr><th width="244.6666259765625">Nome</th><th>Descrição</th></tr></thead><tbody><tr><td>Ativadores</td><td>Detectores de eventos. Monitoram o quarto e iniciam a execução quando uma condição externa é detectada: um passo, uma palavra-chave, alguém entrando no quarto.</td></tr><tr><td>Condições</td><td>Filtros lógicos. Não executam ações, mas determinam se a execução deve ocorrer. Suportam lógica positiva, negativa/invertida (em alguns casos) e OU através do uso de outro Wired Extra.</td></tr><tr><td>Efeitos</td><td>Executores. Traduzem a sequência lógica em uma mudança perceptível: mover mobis, teletransportar usuários, exibir mensagens ou expulsar jogadores.</td></tr><tr><td>Seletores</td><td>Coletadores. Definem alvos dinamicamente por área, tipo, variável ou sinal remoto, sem seleção manual ou limite de <del>5</del> 20 itens por caixa.</td></tr><tr><td>Tabelas de Classificação</td><td>Placar de Usuários. Registram os ganhadores de jogos como Battle Banzai e Freeze, além das diversas utilizações criadas através de sistemas Wired.</td></tr><tr><td>Extras</td><td>Modificadores. Alteram o comportamento de diversos fatores, como a ordem de execução dos Efeitos, física que deve ser aplicada ou a criação de campos de texto personalizados.</td></tr><tr><td>Variáveis</td><td>Armazenamento de dados. Armazenam informações das mais diversas, além de expôr informações internas do jogo como estado ou direção de um mobi, hora do dia, por quanto tempo o quarto está ativo e muito mais.</td></tr></tbody></table>