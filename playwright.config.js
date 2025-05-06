module.exports = {
    use: {
        // browserName: 'Firefox', // Define o navegador a ser utilizado (Firefox)
        headless: false, // Execução não headless (com interface gráfica visível)
        screenshot: 'only-on-failure', // Tira screenshot apenas se o teste falhar
        video: 'retain-on-failure'// Grava vídeo e mantém somente se o teste falhar
    },
    reporter: [['html', { outputFolder: 'reports', open: 'never' }]], // Gera relatório HTML na pasta 'reports' sem abrir automaticamente
    timeout: 60000, // Tempo máximo para execução de cada teste (60 segundos)
}
