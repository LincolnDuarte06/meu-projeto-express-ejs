const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:1,titulo: "Whey Protein", preco:"R$173",descricao:"100% Whey é um suplemento a base de proteína concentrada do soro do leite (Whey Protein Concentrate), matéria-prima elaborada com alta tecnologia, de elevado valor biológico, rápida digestibilidade e alta concentração de aminoácidos essenciais, que são fatores de relevância para auxiliar a síntese proteica muscular. O consumo de suplementos proteicos, associado à uma alimentação saudável e prática de atividade física auxilia na formação de músculos e ossos",imagem: "Whey-Protein-Baunilha.png"},
  {id:2,titulo: "Barra de Proteina", preco:"R$17,75", descricao:"A Growth Protein Bar fornece uma boa quantidade de proteínas com alto valor biológico, possui alta quantidade de fibras, sacia a fome e fornece bons nutrientes.", imagem: "barra-de-proteina-caramelo.png"},
  {id:3,titulo: "Creatina", preco:"R$187,55", descricao:"", imagem: "creatina-growth.png"},
  {id:4,titulo: "nome do produto",preco:"R$1000",descricao:"descrição do produto",imagem: "creatina-growth.png"},
  {id:5,titulo: "nome do produto",preco:"R$1000",descricao:"descrição do produto",imagem: "whey.jpg"},
  {id:6,titulo: "nome do produto",preco:"R$1000",descricao:"descrição do produto",imagem: "whey.jpg"},
  {id:7,titulo: "nome do produto",preco:"R$1000",descricao:"descrição do produto",imagem: "whey.jpg"},
  {id:8,titulo: "nome do produto",preco:"R$1000",descricao:"descrição do produto",imagem: "whey.jpg"},
  {id:9,titulo: "nome do produto",preco:"R$1000",descricao:"descrição do produto",imagem: "whey.jpg"},
  {id:10,titulo: "nome do produto",preco:"R$1000",descricao:"descrição do produto",imagem: "whey.jpg"},
]
function BuscarProdutosPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}

app.get('/', (req, res) => {
  res.render('index', {produtos});
});
app.get('/produtos/:id', (req, res) => {
  const produto = BuscarProdutosPorID(req.params.id)
  res.render('produtos', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});