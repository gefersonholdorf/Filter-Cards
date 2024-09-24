const filterElement = document.querySelector('#filter')
const cards = document.querySelectorAll('.cards li')
const iconFilter = document.querySelector('.icon-filter')

iconFilter.addEventListener('click', () => {
    filterElement.value = ''
    for (let card of cards) {
        card.style.display = "block"
    }
})

filterElement.addEventListener('input', filterCards)

function filterCards() {
    if (filterElement.value != '') {

        for (let card of cards) {
            let title = card.querySelector('h2')
            title = title.textContent.toLowerCase()
            
            let filterText = filterElement.value.toLowerCase()

            if (!title.includes(filterText)) {
                card.style.display = "none"
            } else {
                card.style.display = "block"
            }
        }

    } else {
        for (let card of cards) {
            card.style.display = "block"
        }
    }
}