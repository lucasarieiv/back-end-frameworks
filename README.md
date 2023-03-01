# Back-end Frameworks

Atividade:
1. Criar um formulário usando HTML/CSS/JS
2. Criar script do banco de dados

![Imagem do formulário](img/form-image.png)


## Script Banco de dados
```
CREATE DATABASE sistema;

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  birth TIMESTAMP NULL,
  phone VARCHAR(14) NULL,
  career VARCHAR(50) NULL
)

```