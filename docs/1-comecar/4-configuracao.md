# Configurando Wireds

A janela de configuração dos Wireds segue uma estrutura padronizada entre quase todos os tipos (Ativadores, Efeitos, Condições, etc.), embora cada um possua campos específicos de acordo com sua função (exceto por alguns que não possuem campos).

Apesar das variações, os componentes de interface reutilizam padrões bem definidos. Dominar esses padrões é essencial para configurar sistemas de forma rápida, previsível e escalável.

## Seleção de Mobi

Este campo permite vincular um ou mais mobis à execução do Wired.

Os Wireds que permitem a seleção de mobis entram automaticamente em modo de captura ao abrir sua configuração, permitindo que você clique nos mobis dentro do quarto para selecioná-los e armazená-los na caixa. Os mobis selecionados são destacados com um efeito de cor (estilo "congelado") em cinza, azul ou verde.

**Características importantes:**

* **Limite padrão:** Geralmente permite a seleção de **até 20 mobis por Wired** (originalmente o limite era de 5, credo!).
* **Natureza da seleção:** A seleção é **estática** (não muda dinamicamente sem o auxílio de Seletores).
* **Validação:** Mobis removidos do quarto invalidam automaticamente a referência na configuração.

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_walks_on_furni_icon.png) | **Habbo anda no Mobi** | [imagem] |

## Campo de Texto

Campos de texto são usados para a entrada ou saída de dados livres, tais como:

* Mensagens exibidas no chat.
* Palavras-chave de ativação.

Dependendo do Wired, esses campos podem aceitar:

* **Texto simples**.
* **Variáveis dinâmicas (via Extras):**
  * `#( )`: Para captura de variável em um texto de entrada.
  * `$( )`: Para inserção de variável (e nomes automáticos) em um texto de saída.
* **Formatação básica:**
  * `[red] [/red]`: Para <span style="color: red">vermelho</span>.
  * `[blue] [/blue]`: Para <span style="color: blue">azul</span>.
  * `[purple] [/purple]`: Para <span style="color: purple">roxo</span>.
  * `[green] [/green]`: Para <span style="color: green">verde</span>.
  * `[cyan] [/cyan]`: Para <span style="color: cyan">ciano</span>.
  * `[u] [/u]`: Para <u>sublinhado</u>.
  * `[i] [/i]`: Para <i>itálico</i>.
  * `[b] [/b]`: Para <b>negrito</b>.

> Observação: para utilizar múltiplas formatações simultaneamente, é necessário que as tags de fechamento na ordem inversa à das tags de início. Ou seja, a primeira tag a ser aberta deve ser a última a ser fechada. Por exemplo, `[red][b]AVISO[/b][/red]` ou `[b][u]Pontuação[/u]: [green]42[/green][/b]`.

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_says_something_icon.png) | **Habbo diz algo** | [imagem] |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/57492/wf_trg_bot_reached_avtr_icon.png) | **Bot alcança Mobi** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/57492/wf_act_bot_follow_avatar_icon.png) | **Bot segue o usuário** | [imagem] |

### Múltiplas Linhas

Alguns Wireds permitem múltiplas linhas de texto, para exibir uma mensagem maior no chat ou para definir uma lista de textos de forma fácil.

**Comportamento:**

* Quebras de linha são preservadas
* Pode afetar diretamente a forma como a mensagem aparece no chat
* Útil para mensagens estruturadas ou instruções

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_act_show_message_icon.png) | **Mostrar Mensagem** | [imagem] |
| Seletor | ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_users_byname_icon.png) | **Habbos por Nome** | [imagem] |
| Extra de Variável | ![](https://images.habbo.com/dcr/hof_furni/72921/wf_xtra_var_text_connector_icon.png) | **Conector de Texto** | [imagem] |
| Extra de Variável | ![](https://images.habbo.com/dcr/hof_furni/72921/wf_xtra_var_lvlup_system_icon.png) | **Sistema de Aumento de Nível** | [imagem] |

## Opções de Seleção Única

Permitem escolher apenas uma opção entre várias para alterar o comportamento do Wired.

**Características:**

* Seleção mutuamente exclusiva
* Sempre há uma opção ativa
* Usado para definir comportamento principal

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_says_something_icon.png) | **Habbo diz algo** | [imagem] |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_score_achieved_icon.png) | **Pontuação obtida** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/56667/wf_act_move_rotate_icon.png) | **Mover e Rotacionar Mobi** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/68223/wf_act_control_clock_icon.png) | **Controlar Cronômetro** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/69021/wf_cnd_match_time_icon.png) | **Tempo coincide** | [imagem] |
| Extra | ![](https://images.habbo.com/dcr/hof_furni/69610/wf_xtra_or_eval_icon.png) | **Pelo menos uma condição é verdadeira** | [imagem] |
| Seletor | ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_users_bytype_icon.png) | **Habbos por Tipo** | [imagem] |

## Opções de Seleção Múltipla

Permitem ativar múltiplas opções simultaneamente.

**Características:**

* Cada opção é independente
* Pode alterar o comportamento base do Wired
* Frequentemente usadas como modificadores

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_says_something_icon.png) | **Habbo diz algo** | [imagem] |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/72864/wf_trg_click_user_icon.png) | **Usuário clica em Usuário** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_act_match_to_sshot_icon.png) | **Mobis que voltam à programação original** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/69540/wf_act_send_signal_icon.png) | **Mandar Sinal** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/69021/wf_cnd_match_date_icon.png) | **Data coincide** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/69865/wf_cnd_actor_dir_icon.png) | **Direção do Habbo** | [imagem] |
| Extra | ![](https://images.habbo.com/dcr/hof_furni/69540/wf_xtra_mov_physics_icon.png) | **Física do Movimento** | [imagem] |

### Seletores

É importante observar que todos os Seletores compartilham opções de **Filtro** (interseção) e **Inversão** (selecionar o oposto do critério definido).

[imagem]

## Seleção Numérica

Campos utilizados para definir valores numéricos. Podem aparecer como campos de entrada manual, botões incrementais (+ / -) ou barras deslizantes.

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_periodically_icon.png) | **Repetir Efeito** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/69865/wf_act_rel_mov_icon.png) | **Movimento Relativo do Mobi** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_act_give_var_icon.png) | **Dar Variável** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/69021/wf_cnd_match_time_icon.png) | **Tempo coincide** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_cnd_var_age_match_icon.png) | **Idade Variável** | [imagem] |

### Atraso em Efeitos

Um dos usos mais importantes da seleção numérica é o **atraso**.

[imagem]

Ele define o tempo (em segundos) que o Efeito aguardará antes de executar sua ação. O atraso **não** impede que a pilha seja acionada novamente durante o período de espera, portanto evite usá-lo em situações onde possam haver acionamentos frequêntes para não acabar em estados inesperados.

## Lista Suspensa

Campos que apresentam uma lista de opções pré-definidas em formato compacto para evitar poluição visual, principalmente em casos onde a lista é dinâmica (como por exemplo a lista dos seus grupos) e permitindo a possibilidade de um campo de busca entre as opções.

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/69021/wf_trg_user_performs_action_icon.png) | **Habbo faz ação** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/69865/wf_act_freeze_icon.png) | **Congelar Habbo** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_act_show_message_icon.png) | **Mostrar mensagem** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_actor_in_group_icon.png) | **Membro do Grupo** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/69021/wf_cnd_match_date_icon.png) | **Data coincide** | [imagem] |
| Filtro | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_xtra_filter_furni_by_var_icon.png) | **Mobis com Maior/Menor Variável** | [imagem] |

### Seleção de Variável

Um caso específico de lista suspensa é a seleção de variável. O tipo de variável compatível depende de cada tipo de Wired.

**Observações:**

* Algumas exigem que se selecione uma variável de contexto
* A lista muda dinamicamente conforme o contexto do quarto

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_trg_var_changed_icon.png) | **Variável Mudou** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_act_give_var_icon.png) | **Dar Variável** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_act_change_var_val_icon.png) | **Mudar Valor Variável** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_act_remove_var_icon.png) | **Remover Variável** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_cnd_has_var_icon.png) | **Tem Variável** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_cnd_var_val_match_icon.png) | **Valor Variável** | [imagem] |
| Extra | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_xtra_text_output_variable_icon.png) | **Campo Variável** | [imagem] |
| Extra | ![](https://images.habbo.com/dcr/hof_furni/74772/wf_xtra_scan_chest_furni_by_type_icon.png) | **Baú de Tipo** | [imagem] |
| Seletor | ![](https://images.habbo.com/dcr/hof_furni/71546/wf_slc_furni_with_var_icon.png) | **Mobi com Variável** | [imagem] |
| Filtro | ![](https://images.habbo.com/dcr/hof_furni/71472/wf_xtra_filter_users_by_var_icon.png) | **Usuários com Maior/Menor Variável** | [imagem] |

## Configurações Avançadas

Alguns Wireds possuem opções adicionais ocultas sob um botão de **"Mostrar configurações avançadas"**. Elas são fundamentais para criar sistemas dinâmicos, mas exigem uma **compreensão** maior sobre o fluxo de dados.

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_trggrer_on_frn_icon.png) | **Habbo Ativador está no Mobi** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_actor_in_team_icon.png) | **Membro da Equipe** | [imagem] |

### Fonte de Usuário ou Mobi

A vasta maioria dos Wireds que possuem configurações avançadas utilizam essa seção para poder definir qual entidade será utilizada como referência durante a execução. Essa configuração altera diretamente **quem ou o que será afetado** pelo Wired.

**Possíveis fontes de mobis (disponíveis a depender do contexto):**

* Use o item de ativação
* Use mobis escolhidos
* Escolha de mobis secundários
* Usar mobis do seletor
* Usar mobis do sinal
* Todos os mobis do quarto

**Possíveis fontes de usuários (disponíveis a depender do contexto):**

* Use o usuário acionador
* Use o bot especificado pelo nome
* Use o Habbo especificado pelo nome
* O usuário alcançado
* O usuário clicado
* Usar usuários do seletor
* Usar usuários do Sinal
* Todos os usuários no quarto

**Importância:**

* Essencial para evitar comportamentos fixos
* Permite criar lógica dinâmica baseada no contexto
* Fundamental para integração com Seletores e Sinais

Galeria de exemplos:

| Tipo | Ícone | Nome | Configuração |
| :--- | :--- | :--- | :--- |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_walks_on_furni_icon.png) | **Habbo anda no Mobi** | [imagem] |
| Ativador | ![](https://images.habbo.com/dcr/hof_furni/57492/wf_trg_bot_reached_avtr_icon.png) | **Bot alcança Mobi** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/50950/wf_act_toggle_state_icon.png) | **Mudar estado do Mobi** | [imagem] |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/69982/wf_act_furni_to_furni_icon.png) | **Mover Mobi a Mobi** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/63018/wf_cnd_stuff_is_icon.png) | **Tipo de Mobis coincidem** | [imagem] |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/69021/wf_cnd_triggerer_match_icon.png) | **Ativador coincide** | [imagem] |
| Extra | ![](https://images.habbo.com/dcr/hof_furni/69540/wf_xtra_mov_physics_icon.png) | **Física do Movimento** | [imagem] |
| Extra | ![](https://images.habbo.com/dcr/hof_furni/74772/wf_xtra_scan_chest_furni_by_type_icon.png) | **Baú de Tipo** | [imagem] |
| Extra | ![](https://images.habbo.com/dcr/hof_furni/74772/wf_xtra_custom_contract_icon.png) | **Contrato Customizável** | [imagem] |

## Menu de Contexto (hambúrguer no canto superior esquerdo)

Disponível em todas as janelas de Wired, esse menu oferece ferramentas auxiliares para manipulação da configuração.

**Ações disponíveis:**

* **Copiar/Colar configuração**: Você pode copiar e colar configurações entre Wireds do mesmo tipo
* **Copiar para outro Wired**: Enquanto esta opção estiver habilitada e a caixa estiver aberta, clique duas vezes em outros Wireds para copiar as configurações atuais para eles
* **Limpar mobis escolhidos**: Remove mobis selecionados
* **Voltar configuração padrão**: Reseta todas as configurações do Wired
* **Abrir Ferramentas de Criação Wired**: Atalho para o comando `:wired`
* **Salvar**: Aplica a configuração atual sem fechar a janela
* **Fechar**: Fecha a janela sem salvar alterações adicionais

## Outros

Há também alguns componentes de configuração específicos, usados apenas em um ou outro Wired.

## Seleção de Área

Permite definir uma área retangular diretamente no quarto.

[imagem]

**Como funciona:**

1. O usuário ativa o modo de seleção
2. Clica e arrasta dois pontos (canto inicial e final)
3. O sistema armazena automaticamente a área

Galeria de exemplos:

| Tipo | Ícone | Nome |
| :--- | :--- | :--- |
| Seletor | ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_furni_area_icon.png) | **Mobi na Área** |
| Seletor | ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_users_area_icon.png) | **Habbos na Área** |

## Seleção de Vizinhança

Define uma área baseada em proximidade (distância de um ponto central).

[imagem]

Diferente da seleção de área retangular, aqui o foco é o **alcance ao redor de um ponto**.

**Características:**

* Permite desenhar exatamente a localização a ser considerada como vizinhança
* Dinâmica em relação ao ponto de referência

Galeria de exemplos:

| Tipo | Ícone | Nome |
| :--- | :--- | :--- |
| Seletor | ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_furni_neighborhood_icon.png) | **Mobis na Vizinhança** |
| Seletor | ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_users_neighborhood_icon.png) | **Habbos na Vizinhança** |

### Item de Mão

Define um item de mão disponível no jogo. Acompanha um menu suspenso com alguns itens mais comuns, mas possui também um botão para copiar o seu item de mão atual, permitindo que você configure qualquer item que você tiver disponível ou usando o ID do item para atribuir a variável interna `@handitem` antes de copiar.

[imagem]

Galeria de exemplos:

| Tipo | Ícone | Nome |
| :--- | :--- | :--- |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/57492/wf_act_bot_give_handitem_icon.png) | **Bot dá item de mão** |
| Condição | ![](https://images.habbo.com/dcr/hof_furni/69032/wf_cnd_has_handitem_icon.png) | **Usuário tem item de mão** |
| Seletor | ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_users_handitem_icon.png) | **Habbos com Item de Mão** |

> Observação: existe uma lista negra de itens bloqueados para o Efeito, para evitar que itens relacionados a campanhas de patrocinadores ou exclusivos de staffs sejam usados. Havia um conjunto inicial de itens bloqueados que são fornecidos por mobis raros, mas estes itens já podem ser usados normalmente.

### Visual

Define um visual para ser aplicado. Acompanha uma visualização de uma avatar com o visual configurado e um botão para copiar o seu visual atual.

[imagem]

Galeria de exemplos:

| Tipo | Ícone | Nome |
| :--- | :--- | :--- |
| Efeito | ![](https://images.habbo.com/dcr/hof_furni/57492/wf_act_bot_clothes_icon.png) | **Bot muda de roupa** |


