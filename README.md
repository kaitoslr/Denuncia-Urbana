# 📢 Denúncia Urbana

Aplicativo mobile desenvolvido em **React Native (Expo)** com integração ao **Firebase**, com o objetivo de permitir que cidadãos registrem, acompanhem e gerenciem denúncias urbanas como infraestrutura, iluminação, limpeza e segurança.

---

## 🚀 Funcionalidades

- 🔐 Autenticação de usuários (Login e Cadastro)
- 📍 Criação de denúncias com:
  - Título
  - Categoria
  - Localização
  - Descrição
- 🗂️ Listagem de denúncias por usuário
- 🔍 Filtro e ordenação por data
- ✏️ Edição de denúncias
- 🗑️ Exclusão de denúncias
- 📊 Dashboard no perfil com status:
  - Total de denúncias
  - Abertas
  - Resolvidas
- 🔄 Atualização automática ao navegar entre telas
- 🎨 Interface customizada com Bottom Tab Navigation

---

## 🛠️ Tecnologias Utilizadas

- React Native (Expo)
- TypeScript
- Firebase Authentication
- Firebase Firestore
- React Navigation

---

## 📁 Estrutura do Projeto

```text
src/
├── @types/
│   └── png.d.ts
├── assets/
│   └── denunciante.png
├── components/
│   ├── Ball/
│   ├── Button/
│   ├── CustomTabBar/
│   ├── Flag/
│   └── Input/
├── database/
│   └── firebase.ts
├── global/
│   └── themes.ts
├── navigation/
│   ├── AppNavigator.tsx
│   ├── BottomNavigator.tsx
│   └── types.ts
├── screens/
│   ├── createReport/
│   ├── editReport/
│   ├── home/
│   ├── login/
│   ├── signUp/
│   └── user/
├── services/
│   ├── authService.ts
│   └── reportService.ts
└── types/
    └── Report.ts
```

---

## 🔥 Banco de Dados (Firestore)

### Coleção: `users`

```ts
{
  uid: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}
```

### Coleção: `reports`

```ts
{
  title: string;
  description: string;
  category: string;
  location: string;
  imageUrl: string;
  status:
    | "Aberto"
    | "Em análise"
    | "Andamento"
    | "Resolvido"
    | "Fechado";
  userId: string;
  createdAt: string;
}
```

---

## 📦 Instalação e Execução

```bash
# instalar dependências
npm install

# iniciar projeto
npx expo start
```

---

## 🔐 Regras do Firestore

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /users/{userId} {
      allow create: if request.auth != null
                    && request.auth.uid == userId;

      allow read, update, delete: if request.auth != null
                                  && request.auth.uid == userId;
    }

    match /reports/{reportId} {
      allow create: if request.auth != null;

      allow read: if request.auth != null;

      allow update, delete: if request.auth != null
                            && request.auth.uid == resource.data.userId;
    }
  }
}
```

---

## 💡 Objetivo do Projeto

Este projeto foi desenvolvido com foco em **impacto social**, permitindo que usuários registrem problemas urbanos de forma simples, rápida e organizada.

---

## 👨‍💻 Autor

Desenvolvido por **Kaito Shinori**