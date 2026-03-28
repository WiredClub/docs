# Tipos de Wireds

O sistema Wired é dividido em categorias distintas, cada uma identificada por uma cor e formato para facilitar a assimiliação de sua função lógica dentro da pilha. Compreender essas divisões é o primeiro passo para criar automações eficientes.

## 1. Ativadores: O "Quando"
Os Ativadores são representados pelas caixas **marrons**. Eles monitoram o quarto e "disparam" a execução para o resto da pilha quando um evento específico ocorre.

| Ativador | Descrição |
| :--- | :--- |
| **Habbo anda no Mobi** | Ativado quando um usuário, bot ou pet pisa no mobi selecionado. |
| **Habbo diz algo** | Disparado quando um usuário digita uma palavra ou frase específica no chat. |
| **Habbo faz ação** | Ativa quando um usuário realiza ações como acenar, sentar, dançar ou ficar em modo "afk". |
| **Batida** | Detecta quando um mobi em movimento colide com um usuário. |
| **Repetir Efeito** | Executa a pilha em intervalos regulares (de 0,5 segundos a 60 segundos). |
| **Estado do Mobi é modificado** | Ativado quando o estado de um mobi é alterado (ex: girar uma alavanca ou abrir uma porta). |
| **Habbo entra no Quarto** | Dispara assim que um usuário entra ou sai do quarto. |
| **Variável Mudou** | Ativa quando uma variável específica é atribuída, excluída ou tem seu valor alterado. |


## 2. Efeitos: O "O Que"
Os Efeitos são as caixas **cinzas ou prateadas**. Algumas possuem a cor **preta** para representar que sua função é <u>negativa</u> ("oposta"). Eles executam a ação física ou lógica resultante da ativação.

| Efeito | Descrição |
| :--- | :--- |
| **Teleportar para Mobi** | Teleporta um Habbo para um mobi selecionado. |
| **Mover e Rotacionar Mobi** | Altera a posição e/ou a direção em que um mobi está posicionado. |
| **Configurar a Altura do Mobi** | Incrementa, decrementa ou define a posição vertical do mobi selecionado. |
| **Mostrar mensagem** | Cria uma mensagem de texto no chat do quarto de forma privada ao usuário ou de forma geral para todos os usuários. |
| **Entrar na Equipe** | Faz com que o Habbo entre em uma das equipes selecionadas. |
| **Faz pilhas de wireds** | Aciona a execução de outra pilha, ignorando quaisquer condições presentes nela. |

### Efeitos Negativos
Alguns Efeitos possuem a cor **preta** para representar que sua execução é **invertida**. Em outras palavras, esses Efeitos são executados caso as Condições não permitam a execução natural da pilha. Em linguagens de programação gerais, essa lógica é encontrada nos blocos lógicos "SENÃO": `SE <condições> ENTÃO <efeitos> SENÃO <efeitos negativos> FIM`.

| Efeito Negativo | Descrição |
| :--- | :--- |
| **Escrever nos logs** | Cria uma mensagem de registro para o criador do quarto fazer auditoria. |
| **Faz pilhas** | Aciona a execução de outra pilha, ignorando quaisquer condições presentes nela. |
| **Envia sinal** | Emite um sinal através de uma antena, para que outra pilha possa captar esse sinal e iniciar uma nova execução, além de ser capaz de transmitir itens selecionados. |

## 3. Condições: O "Se"
As Condições são as caixas **brancas**. Elas servem como filtros de segurança para garantir que o efeito só ocorra sob circunstâncias específicas.

| Condição | Descrição |
| :--- | :--- |
| **Membro da Equipe** | Valida se o Habbo é membro da equipe pré-definida. |
| **Estado e Posição do Mobi combinam** | Valida se o mobi selecionado está no estado e/ou posição que foi memorizada. |
| **Habbo Ativador está no Mobi** | Valida se o usuário que acionou o ativador está em cima do mobi selecionado. |

### Condições Negativas
Algumas Condições possuem a cor **preta** para representar que sua função é **oposta** da sua versão original. Em linguagens de programação gerais, esse comportamento pode ser compreendido como a **negação** da condição em sua versão original.

| Condição Negativa | Descrição |
| :--- | :--- |
| **Ativador NÃO está no Mobi** | Valida se o usuário que acionou o ativador **NÃO** está em cima do mobi selecionado. |
| **NÃO é membro de grupo** | Valida se o usuário acionador **NÃO** está no grupo. |
| **NÃO há Mobis em cima** | Valida se o mobi selecionado **NÃO** possui mobis em cima |

## 4. Seletores: O "Quem ou Qual"
Os Seletores usam a cor **azul-escuro** e são considerávelmente mais altos do que as demais caixas Wired. Eles permitem definir alvos dinâmicos em massa, superando o limite tradicional de 20 mobis por caixa. Veja a demonstração feita pela equipe durante o lançamento desse tipo de Wired: https://www.youtube.com/watch?v=yAP6NjiT_XU.

| Seletor | Função |
| :--- | :--- |
| **Habbos na Área** | Seleciona todos os Habbos dentro de uma área retangular desenhada no quarto. |
| **Mobi por Tipo** | Seleciona todos os mobis de um mesmo tipo (ID) presentes no quarto. |
| **Habbos no Grupo** | Seleciona todos os Habbos que forem membros do grupo. |
| **Mobis na Vizinhança** | Seleciona todos os mobis que estiverem na vizinhança de um determinado ponto de referência. |

Utilizar múltiplos Seletores na mesma pilha fará com que a seleção deles sejam mescladas, e em cada um você conseguirá configurar se quer inverter a seleção (selecionar tudo exceto o que foi configurado) ou então se quer filtrar (intersecção) as demais seleções que estiverem na mesma pilha.

## Filtros: O "Quanto"
Os Filtros usam a cor **branca** e também são considerávelmente mais altos, como os Selectores. Eles complementam os Seletores pois fazem um papel muito útil filtrando pela **quantidade de itens**.

| Filtro | Função |
| :--- | :--- |
| **Filtrar Habbos** | Filtra a seleção atual de Habbos para um valor X. |
| **Filtrar Mobis** | Filtra a seleção atual de mobis para um valor X. |
| **Usuários com Maior/Menor Variável** | Filtra a seleção atual de Habbos baseado em alguma de suas variáveis e uma ordenação específica. |
| **Mobis com Maior/Menor Variável** | Filtra a seleção atual de mobis baseado em alguma de suas variáveis e uma ordenação específica. |

## 5. Extras: O "Como"
Os Extras usam cores variadas, como uma tentativa de fazer com que as que tenham propósitos similares com uma parência similar. Estes componentes modificam o comportamento padrão da pilha ou adicionam funcionalidades avançadas.

| Extra | Cor | Função |
| :--- | :--- | :--- |
| **Efeito Aleatório** | Cinza | A cada execução da pilha, escolhe aleatoriamente um dos efeitos da pilha para executar. |
| **Efeito Inédito** | Cinza | A cada execução da pilha, escolhe um efeito da pilha que ainda não foi executado até que todos sejam. |
| **Física do Movimento** | Azul | Altera como os mobis se comportam ao colidir ou atravessar outros objetos. |
| **Pelo menos uma condição é verdadeira** | Branco | Capaz de alterar como as Condições são avaliadas e até mesmo fazer com que Condições de outras pilhas também sejam avaliadas. |
| **Campo Nome de Usuário** | Amarelo | Cria um campo dinâmico para ser adicionado aos Efeitos que criam mensagens para ser substituído pelo nome de um usuário. |

## 6. Variáveis: O "Dado"
As Variáveis possuem um visual totalmente diferente, representando uma caixa predominantemente cinza que contém um painel lateral de cor **específica para cada tipo**. Cada um desses tipos são para diferentes formas de se criar uma variável, ou seja, uma forma de armazenar informações, de forma temporária enquanto o quarto está ativo ou de forma prolongada até que você decida remover a variável.

| Variável | Cor | Função |
| :--- | :--- | :--- |
| **Usuário Variável** | Verde | Permite atribuir uma variável a um Usuário específico. |
| **Mobi Variável** | Amarelo | Permite atribuir uma variável a um Mobi específico. |
| **Variável Global** | Azul | Define uma variável de escopo global para o quarto todo. |
| **Contexto Variável** | Laranja | Permite atribuir uma variável a um contexto de execução específico. |
| **De outro quarto** | Rosa | Importa uma variável criada em outro quarto. |
| **Eco** | Branco | Ecoa/Espelha uma variável interna para poder aplicar componentes extras a ela. |

A utilização de Variáveis não se faz através de posicioná-las na mesma pilha das demais caixas wired, portanto elas podem ficar aglomeradas ou espalhadas sem causar nenhum tipo de conflito com as demais pilhas. Entretanto, os Extras para Variáveis precisam sim estar na mesma pilha da variável que se quer modificar o comportamento.

De modo geral, existem apenas 4 tipos de variáveis:
- Variável de usuário
- Variável de mobi
- Variável de contexto
- Variável global

Para cada uma dessas, existem:
- Variáveis criadas por você: são as caixas que você coloca no quarto
- Variáveis inteligentes: são criadas em situações específicas, principalmente para mobis específicos como a capacidade máxima de um baú de moedas. O nome delas é prefixado com "~".
- Variáveis internas: são as variáveis "fixas" de cada tipo de variável como o ID de um usuário. O nome delas é prefixado com "@".
- Subvariáveis: de forma geral, é usado para agrupar variáveis de forma semântica como a posição X e Y de um usuário. O nome delas é utilizado junto com o nome da variável mãe com um "." como separador.

### Extras para Variáveis
Os Extras para Variáveis também possuem um visual totalmente diferente, se mantendo similares às caixas de Variáveis mas com uma altura reduzida e cores diferentes de acordo com seus tipos. Como mencionado anteriormente, elas precisam ser posicionadas junto das caixas de Variável que se quer modificar o comportamento.

| Extra para Variável | Cor | Função |
| :--- | :--- | :--- |
| **Conector de Texto** | Amarelo | Permite mapear valores de variável com um texto para gerar uma mensagem. |
| **Sistema de Aumento de Nível** | Verde | Cria subvariáveis com valor calculado automaticamente para progressão de nível com base no valor da variável que estiver modificando. |
| **Utilitários de Tempo** | Azul | Cria subvariáveis com valor calculado automaticamente para converção de tempo com base no valor da variável que estiver modificando. |

## 7. Contratos: O "Acordo"
Os Contratos possuem um visual totalmente diferente, e de certa forma pode nem ser considerado um "Wired". Definitivamente não é uma "caixa", sendo apenas representado por uma pilha pequena de folhas de papel, inclusive possuindo uma interface de configuração com layout diferente das demais caixas Wired.

| Contrato | Cor | Função |
| :--- | :--- | :--- |
| **Contrato de Pagamento** | Verde | Define como o usuário deverá "pagar". |
| **Contrato de Negociação** | Azul | Define como o usuário deverá "pagar" e o que ele irá "receber". |
| **Contrato de Recompensa** | Amarelo | Define o que o usuário deverá "receber". |

### Contrato Personalizado
O Contrato Personalizado retoma a relação com caixas wired, com uma base pequena **azul** e uma folha de papel em cima. A interface de configuração também retorna ao layout das demais caixas wired, permitindo que atue como qualquer um dos outros contratos de forma dinâmica, permitindo interação com variáveis, seletores e muito mais.

---

### Utilitários Adicionais
Existem mobis auxiliares que não são "caixas" de programação, mas são fundamentais:
- **Antenas:** Usadas para enviar e receber sinais sem fios entre pilhas distantes.
- **Conector de Quarto:** Teleporte capaz de teletransportar um usuário de um quarto para outro sem que o usuário precise interagir com o mobi.
- **Cronômetros:** Cronômetros especializados para serem utilizados com Wired, elevando as capacidades dos cronômetros originais feitos para Battle Banzai e Freeze.
- **Tabela de classificação:** Embora possuem a mesma aparência das demais caixas Wired, não possuem nenhum tipo de configuração pois possuem um comportamento próprio, registrando o resultado de partidas Battle Banzai e Freeze automaticamente.
- **Baús Wired:** Capazes de armazenas mobis ou moedas para permitir atrasações através de Wired.
