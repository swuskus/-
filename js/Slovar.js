document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Акционка", description: "Дешевые акции ." },
        { term: "Натянут ", description: "Купят по низу рынка" },
        { term: "Опционы", description: "Обман" },
        { term: "Обнал", description: "Сделать деньги законными " },
        { term: "Бэлфорд", description: "Главный герой." },
        { term: "Страус ", description: "Перевоз денег." },
        { term: "Папье маше", description: "Деньги" },
        { term: "Лотэри", description: "повезло" },
        { term: "Паук", description: "Денежная схема " },
        { term: "Дешевка", description: "Плохая компания ." }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
