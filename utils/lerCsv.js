const fs = require('fs') // Importa o módulo 'fs' para operações de sistema de arquivos
const { parse } = require('csv-parse/sync') // Importa a função 'parse' do pacote 'csv-parse' para analisar arquivos CSV

function lerCsv(caminho) {
    const conteudo = fs.readFileSync(caminho, 'utf-8') // Lê o conteúdo do arquivo CSV de forma síncrona
    const registros = parse(conteudo, {
        columns: true, // Interpreta a primeira linha como nomes das colunas
        skip_empty_lines: true, // Ignora linhas vazias no arquivo
    });
    return registros // Retorna os registros analisados
}

module.exports = { lerCsv } // Exporta a função 'lerCsv' para uso em outros módulos