# Tipos de Wireds

O sistema Wired é dividido em categorias distintas, cada uma identificada por uma cor e um formato para facilitar a assimilação de sua função lógica dentro da pilha. Compreender essas divisões é o primeiro passo para criar automações eficientes.

## 1. Ativadores: O "Quando"
Os Ativadores são representados pelas caixas **marrons**. Eles monitoram o quarto e "disparam" a execução para o resto da pilha quando um evento específico ocorre.

| Ícone | Ativador | Descrição |
| :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_walks_on_furni_icon.png) | **Habbo anda no Mobi** | Ativado quando um usuário, bot ou pet pisa no mobi selecionado. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_says_something_icon.png) | **Habbo diz algo** | Disparado quando um usuário digita uma palavra ou frase específica no chat. |
| ![](https://images.habbo.com/dcr/hof_furni/69021/wf_trg_user_performs_action_icon.png) | **Habbo faz ação** | Ativa quando um usuário realiza ações como acenar, sentar, dançar ou ficar ausente. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_collision_icon.png) | **Batida** | Detecta quando um mobi em movimento colide com um usuário. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_trg_periodically_icon.png) | **Repetir Efeito** | Executa a pilha em intervalos regulares (de 0,5 a 60 segundos). |
| ![](https://images.habbo.com/dcr/hof_furni/69540/wf_trg_stuff_state_icon.png) | **Estado do Mobi é modificado** | Ativado quando o estado de um mobi é alterado (ex: girar uma alavanca ou abrir uma porta). |
| ![](https://images.habbo.com/dcr/hof_furni/56667/wf_trg_enter_room_icon.png) | **Habbo entra no Quarto** | Dispara assim que um usuário entra no quarto. |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_trg_var_changed_icon.png) | **Variável Mudou** | Ativa quando uma variável específica é atribuída, excluída ou tem seu valor alterado. |

Veja a lista completa [aqui](#).

## 2. Efeitos: O "O Que"
Os Efeitos são as caixas **cinzas ou prateadas**. Algumas possuem a cor **preta** para representar que serão executadas somente quando as condições não forem validadas. Eles executam a ação física ou lógica resultante da ativação.

| Ícone | Efeito | Descrição |
| :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_act_teleport_to_icon.png) | **Teleportar para Mobi** | Teleporta um Habbo para um mobi selecionado. |
| ![](https://images.habbo.com/dcr/hof_furni/56667/wf_act_move_rotate_icon.png) | **Mover e Rotacionar Mobi** | Altera a posição e/ou a direção em que um mobi está posicionado. |
| ![](https://images.habbo.com/dcr/hof_furni/69540/wf_act_set_altitude_icon.png) | **Configurar a Altura do Mobi** | Incrementa, decrementa ou define a posição vertical do mobi selecionado. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_act_show_message_icon.png) | **Mostrar mensagem** | Cria uma mensagem de texto no chat do quarto de forma privada ao usuário ou de forma geral para todos os usuários. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_act_join_team_icon.png) | **Entrar na Equipe** | Faz com que o Habbo entre em uma das equipes selecionadas. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_act_call_stacks_icon.png) | **Faz pilhas de wireds** | Aciona a execução de outra pilha, ignorando quaisquer condições presentes na pilha alvo. |

Veja a lista completa [aqui](#).

### Efeitos Negativos
Alguns Efeitos possuem a cor **preta** para representar que sua execução é **invertida**. Em outras palavras, esses Efeitos são executados caso as Condições não permitam a execução natural da pilha. Em linguagens de programação gerais, essa lógica é encontrada nos blocos lógicos "SENÃO": `SE <condições> ENTÃO <efeitos> SENÃO <efeitos negativos> FIM`.

| Ícone | Efeito Negativo | Descrição |
| :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/73909/wf_act_neg_log_icon.png) | **Escrever nos logs** | Cria uma mensagem de registro para fins de auditoria. |
| ![](https://images.habbo.com/dcr/hof_furni/70536/wf_act_neg_call_stacks_icon.png) | **Faz pilhas** | Aciona a execução de outra pilha, ignorando quaisquer condições presentes na pilha alvo. |
| ![](https://images.habbo.com/dcr/hof_furni/70536/wf_act_neg_send_signal_icon.png) | **Envia sinal** | Emite um sinal através de uma antena, para que outra pilha possa captar esse sinal e iniciar uma nova execução, além de ser capaz de transmitir itens selecionados. |

Veja a lista completa [aqui](#).

## 3. Condições: O "Se"
As Condições são as caixas **brancas**. Elas servem como filtros de segurança para garantir que o efeito só ocorra sob circunstâncias específicas.

| Ícone | Condição | Descrição |
| :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_actor_in_team_icon.png) | **Membro da Equipe** | Valida se o usuário é membro da equipe pré-definida. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_match_snapshot_icon.png) | **Estado e Posição do Mobi combinam** | Valida se o mobi selecionado está no estado e/ou posição que foi memorizada. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_trggrer_on_frn_icon.png) | **Habbo Ativador está no Mobi** | Valida se o usuário está em cima do mobi selecionado. |

Veja a lista completa [aqui](#).

### Condições Negativas
Algumas Condições possuem a cor **preta** para representar que sua função é **oposta** da sua versão original. Em linguagens de programação gerais, esse comportamento pode ser compreendido como a **negação** da condição em sua versão original.

| Ícone | Condição Negativa | Descrição |
| :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_not_trggrer_on_icon.png) | **Ativador NÃO está no Mobi** | Valida se o usuário **NÃO** está em cima do mobi selecionado. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_not_in_group_icon.png) | **NÃO é membro de grupo** | Valida se o usuário **NÃO** está no grupo. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_cnd_not_furni_on_icon.png) | **NÃO há Mobis em cima** | Valida se o mobi selecionado **NÃO** possui mobis em cima |

Veja a lista completa [aqui](#).

## 4. Seletores: O "Quem ou Qual"
Os Seletores usam a cor **azul-escuro** e são consideravelmente mais altos do que as demais caixas Wired. Eles permitem definir alvos dinâmicos em massa, superando o limite tradicional de 20 mobis por caixa. Veja a demonstração feita pela equipe durante o lançamento desse tipo de Wired: https://www.youtube.com/watch?v=yAP6NjiT_XU.

| Ícone | Seletor | Função |
| :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_users_area_icon.png) | **Habbos na Área** | Seleciona todos os Habbos dentro de uma área retangular desenhada no quarto. |
| ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_furni_bytype_icon.png) | **Mobi por Tipo** | Seleciona todos os mobis de um mesmo tipo (ID do mobi) presentes no quarto. |
| ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_users_group_icon.png) | **Habbos no Grupo** | Seleciona todos os Habbos que forem membros do grupo. |
| ![](https://images.habbo.com/dcr/hof_furni/69982/wf_slc_furni_neighborhood_icon.png) | **Mobis na Vizinhança** | Seleciona todos os mobis que estiverem na vizinhança de um determinado ponto de referência. |

Utilizar múltiplos Seletores na mesma pilha fará com que a seleção deles seja mesclada, e em cada um deles você poderá configurar se quer inverter a seleção (selecionar tudo exceto o que foi configurado) ou então se quer filtrar (intersecção) as demais seleções que estiverem na mesma pilha.

Veja a lista completa [aqui](#).

## Filtros: O "Quanto"
Os Filtros usam a cor **branca** e também são consideravelmente mais altos, como os Seletores. Eles complementam os Seletores pois fazem um papel muito útil filtrando pela **quantidade de itens**.

| Ícone | Filtro | Função |
| :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/69982/wf_xtra_filter_users_icon.png) | **Filtrar Habbos** | Filtra a seleção atual de Habbos para um valor X. |
| ![](https://images.habbo.com/dcr/hof_furni/69982/wf_xtra_filter_furni_icon.png) | **Filtrar Mobis** | Filtra a seleção atual de mobis para um valor X. |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_xtra_filter_users_by_var_icon.png) | **Usuários com Maior/Menor Variável** | Filtra a seleção atual de Habbos baseado em alguma de suas variáveis e uma ordenação específica. |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_xtra_filter_furni_by_var_icon.png) | **Mobis com Maior/Menor Variável** | Filtra a seleção atual de mobis baseado em alguma de suas variáveis e uma ordenação específica. |

Veja a lista completa [aqui](#).

## 5. Extras: O "Como"
Os Extras usam cores variadas, como uma tentativa de fazer com que as que tenham propósitos similares com uma aparência similar. Estes componentes modificam o comportamento padrão da pilha ou adicionam funcionalidades avançadas.

| Ícone | Extra | Cor | Função |
| :--- | :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_xtra_random_icon.png) | **Efeito Aleatório** | Cinza | A cada execução da pilha, escolhe aleatoriamente um dos efeitos da pilha para executar. |
| ![](https://images.habbo.com/dcr/hof_furni/50950/wf_xtra_unseen_icon.png) | **Efeito Inédito** | Cinza | A cada execução da pilha, escolhe um efeito da pilha que ainda não foi executado até que todos sejam. |
| ![](https://images.habbo.com/dcr/hof_furni/69540/wf_xtra_mov_physics_icon.png) | **Física do Movimento** | Azul | Altera como os mobis se comportam ao colidir ou atravessar outros objetos. |
| ![](https://images.habbo.com/dcr/hof_furni/69610/wf_xtra_or_eval_icon.png) | **Pelo menos uma condição é verdadeira** | Branco | Capaz de alterar como as Condições são avaliadas e até mesmo fazer com que Condições de outras pilhas também sejam avaliadas. |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_xtra_text_output_username_icon.png) | **Campo Nome de Usuário** | Amarelo | Cria um campo dinâmico para ser adicionado aos Efeitos que criam mensagens para ser substituído pelo nome de um usuário. |

Veja a lista completa [aqui](#).

## 6. Variáveis: O "Dado"
As Variáveis possuem um visual totalmente diferente, representando uma caixa predominantemente cinza que contém um painel lateral de cor **específica para cada tipo**. Cada um desses tipos é para diferentes formas de se criar uma variável, ou seja, uma forma de armazenar informações, de forma temporária enquanto o quarto está ativo ou de forma prolongada até que você decida remover a variável.

| Ícone | Variável | Cor | Função |
| :--- | :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_var_user_icon.png) | **Usuário Variável** | Verde | Permite atribuir uma variável a um Usuário específico. |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_var_furni_icon.png) | **Mobi Variável** | Amarelo | Permite atribuir uma variável a um mobi específico. |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_var_room_icon.png) | **Variável Global** | Azul | Define uma variável de escopo global para o quarto todo. |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_var_context_icon.png) | **Contexto Variável** | Laranja | Permite atribuir uma variável a um contexto de execução específico. |
| ![](https://images.habbo.com/dcr/hof_furni/71472/wf_var_reference_icon.png) | **De outro quarto** | Rosa | Importa uma variável criada em outro quarto. |
| ![](https://images.habbo.com/dcr/hof_furni/72921/wf_var_echo_icon.png) | **Eco** | Branco | Ecoa/Espelha uma variável interna para poder aplicar componentes extras a ela. |

A utilização de variáveis não ocorre através do posicionamento delas na mesma pilha das demais caixas Wired, portanto elas podem ficar aglomeradas ou espalhadas sem causar conflitos com as demais pilhas. Entretanto, os Extras para Variáveis precisam estar, sim, na mesma pilha da variável que se quer modificar o comportamento.

De modo geral, existem apenas 4 tipos principais:
- Variável de usuário
- Variável de mobi
- Variável de contexto
- Variável global

Para cada uma dessas, existem:
- **Variáveis criadas por você**: são as caixas que você coloca no quarto
- **Variáveis inteligentes**: são criadas em situações específicas, principalmente para mobis específicos, como a capacidade máxima de um baú de moedas. O nome delas é prefixado com "~".
- **Variáveis internas**: são as variáveis "fixas" de cada tipo de variável, como o ID de um usuário. O nome delas é prefixado com "@".
- **Subvariáveis**: de forma geral, é usado para agrupar variáveis de forma semântica como a posição X e Y de um usuário. O nome delas é utilizado junto com o nome da variável mãe com um "." como separador.

Veja a lista completa [aqui](#).

### Extras para Variáveis
Os Extras para Variáveis também possuem um visual totalmente diferente, se mantendo similares às caixas de Variáveis mas com uma altura reduzida e cores diferentes de acordo com seus tipos. Como mencionado anteriormente, elas precisam ser posicionadas junto das caixas de Variável que se quer modificar o comportamento.

| Ícone | Extra para Variável | Cor | Função |
| :--- | :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/72921/wf_xtra_var_text_connector_icon.png) | **Conector de Texto** | Amarelo | Permite mapear valores de variável com um texto para gerar uma mensagem. |
| ![](https://images.habbo.com/dcr/hof_furni/72921/wf_xtra_var_lvlup_system_icon.png) | **Sistema de Aumento de Nível** | Verde | Cria subvariáveis com valor calculado automaticamente para progressão de nível com base no valor da variável que estiver modificando. |
| ![](https://images.habbo.com/dcr/hof_furni/72921/wf_xtra_var_time_util_icon.png) | **Utilitários de Tempo** | Azul | Cria subvariáveis com valor calculado automaticamente para conversão de tempo com base no valor da variável que estiver modificando. |

Veja a lista completa [aqui](#).

## 7. Contratos: O "Acordo"
Os Contratos possuem um visual totalmente diferente, e de certa forma podem nem ser considerados um "Wired". Definitivamente não é uma caixa, sendo apenas representado por uma pilha pequena de folhas de papel, inclusive possuindo uma interface de configuração com estilo diferente das demais caixas Wired.

| Ícone | Contrato | Cor | Função |
| :--- | :--- | :--- | :--- |
| ![](https://images.habbo.com/dcr/hof_furni/74772/wf_contract_payment_icon.png) | **Contrato de Pagamento** | Verde | Define como o usuário deverá "pagar". |
| ![](https://images.habbo.com/dcr/hof_furni/74772/wf_contract_trade_icon.png) | **Contrato de Negociação** | Azul | Define como o usuário deverá "pagar" e o que ele irá "receber". |
| ![](https://images.habbo.com/dcr/hof_furni/74772/wf_contract_reward_icon.png) | **Contrato de Recompensa** | Amarelo | Define o que o usuário deverá "receber". |

### Contrato Customizável
O Contrato Customizável retoma a relação com caixas Wired, com uma base pequena **azul** e uma folha de papel em cima. A interface de configuração também retorna ao estilo das demais caixas Wired, permitindo que atue como qualquer um dos outros contratos de forma dinâmica, atravéz da interação com variáveis, seletores e muito mais.

![](https://images.habbo.com/dcr/hof_furni/74772/wf_xtra_custom_contract_icon.png)

---

# Utilitários Adicionais
Existem mobis auxiliares que não são "caixas" de programação, mas são fundamentais:
- **Antenas:** Usadas para enviar e receber sinais sem fios entre pilhas distantes.
- **Conector de Quarto:** Teleporte capaz de teletransportar um usuário de um quarto para outro sem que o usuário precise interagir com o mobi.
- **Cronômetros:** Cronômetros especializados para serem utilizados com Wired, elevando as capacidades dos cronômetros originais feitos para Battle Banzai e Freeze.
- **Tabela de classificação:** Embora possuem a mesma aparência das demais caixas Wired, não possuem nenhum tipo de configuração pois possuem um comportamento próprio, registrando o resultado de partidas Battle Banzai e Freeze automaticamente.
- **Baús Wired:** Capazes de armazenar mobis ou moedas para permitir transações através de Wired.
