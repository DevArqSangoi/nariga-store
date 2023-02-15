export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    qtdEstqoue: number;
    imagem: string;    
}

export interface ICarrinho extends IProduto {
    quantidade: number;
}

export const produtos = [
    { id: 1, descricao: "Mouse gamer", preco: 439, descricaoPreco: "À vista no Pix", imagem: "./mouse-3.jpg", qtdEstqoue: 10 },
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista no Pix", imagem: "./monitor-1.jpg", qtdEstqoue: 10 },
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no Pix", imagem: "./teclado-1.jpg", qtdEstqoue: 10 },
    { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricaoPreco: "À vista no Pix", imagem: "./fone-de-ouvido-2.jpg", qtdEstqoue: 10 },
    { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no Pix", imagem: "./fone-de-ouvido-1.jpg", qtdEstqoue: 10 },
    { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no Pix", imagem: "./fone-de-ouvido-3.jpg", qtdEstqoue: 10 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no Pix", imagem: "./hd.jpg", qtdEstqoue: 10 },
    { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no Pix", imagem: "./placa-video.jpg", qtdEstqoue: 10 },
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no Pix", imagem: "./processador.jpg", qtdEstqoue: 10 },
    { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no Pix", imagem: "./laptop-1.jpg", qtdEstqoue: 10 },
    { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no Pix", imagem: "./laptop-2.jpg", qtdEstqoue: 10 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no Pix", imagem: "./mouse-1.png", qtdEstqoue: 10 },
    { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no Pix", imagem: "./mouse-2.jpg", qtdEstqoue: 10 },
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no Pix", imagem: "./mouse-4.jpg", qtdEstqoue: 10 },
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no Pix", imagem: "./teclado-2.jpg", qtdEstqoue: 10 },
]