/**********


import express, { response } from 'express';

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidad estamos acessando do sistema

// GET: Buscar uma ou mais informações do backend
// POST: Criar uma nova informação no backend
// PUT: Atualizar uma informação existente no backend
// DELETE: Remover uma informação do backend

// POST: http://localhost:3333/users = Criar usuários
// GET: http://localhost:3333/users = Listar usuários
// GET: http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Params: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Resquest Body: Parâmetros para criação/atualização de informações

const users = [
    'Diego', //0
    'Cleiton',//1
    'Robson', //2
    'Daniel', //3
];

app.get('/users', (request, response) => {
    const search = String(request.query.search); //String foi gambi pq pode ser mais de um

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        nome: data.nome,
        email: data.email
    };

    return response.json(user);
});

//npm run dev <--COMANDO PARA RODAR!
//yarn dev <--COMANDO PARA RODAR!
app.listen(3333);


*******/