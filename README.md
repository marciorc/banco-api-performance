# banco-api-performance

Testes de performance para o projeto [banco-api](https://github.com/juliodelimas/banco-api), utilizando o K6 como ferramenta principal.

## 📌 Introdução

Este repositório contém scripts de testes de performance com foco em **API REST**, escritos em **JavaScript** e executados via **K6**. O objetivo é avaliar o desempenho dos endpoints da aplicação, simulando diferentes cenários de carga.

## ⚙️ Tecnologias Utilizadas

- [K6](https://k6.io/) — Ferramenta de código aberto para testes de carga e performance.
- JavaScript — Linguagem base para criação dos testes.
- Variáveis de ambiente — Para parametrização do ambiente de execução (ex: `BASE_URL`).

## 📁 Estrutura do Repositório

```
banco-api-performance/
├── config/                      # path for environment configs
│   └── config.local.json
├── fixtures/                    # path for body payloads
│   └── postLogin.json
├── helpers/                     # path for repetitive flows (like login)
│   └── autenticacao.js
├── test/                        # path for test scripts
│   ├── login.test.js            # Login test
│   ├── transferencias.test.js   # Transfer test
├── utils/
│   └── variaveis.js             # function to define the environment to be executed
└── README.md
```

## 🧩 Objetivo de Cada Grupo de Arquivos

- `config/`: Contém arquivos de configuração de ambiente. Permite definir variáveis específicas para diferentes contextos de execução.

- `fixtures/`: Armazena os payloads utilizados nos testes, simulando os dados que são enviados às requisições.

- `helpers/`: Agrupa fluxos reutilizáveis e funções auxiliares, como login ou geração de tokens, que são comuns a múltiplos testes.

- `test/`: Contém os scripts de teste organizados por funcionalidade, como autenticação e transferências.

- `utils/`: Funções utilitárias para auxiliar os testes, como a definição do ambiente com base nas variáveis.

- `README.md`: Documentação do projeto, com instruções de uso e organização.

## 🚀 Instalação e Execução do Projeto

### 1. Pré-requisitos

- Ter o [K6](https://k6.io/docs/getting-started/installation/) instalado na máquina.
- Ter o repositório clonado:

```bash
git clone https://github.com/marciorc/banco-api-performance.git
cd banco-api-performance
```

### 2. Definindo a BASE_URL

Antes de executar qualquer teste, defina a URL base da API como variável de ambiente:

```bash
export BASE_URL=https://sua-api.com
```

> No Windows (cmd):
```cmd
set BASE_URL=https://sua-api.com
```

### 3. Executando os testes

Execute qualquer script dentro da pasta `scripts/` com o comando:

```bash
k6 run scripts/nome-do-teste.js
```

### 4. Executando com relatório em tempo real (dashboard)

Para visualizar o teste em tempo real via dashboard no navegador, utilize:

```bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run scripts/nome-do-teste.js
```

Após a execução, o relatório será exportado para o arquivo `html-report.html`.