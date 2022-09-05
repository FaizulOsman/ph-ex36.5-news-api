/* Load Data From Api */
const loadData = categories => {
    fetch(`${categories}`)
        .then(res => res.json())
        .then(data => dataInArray(data))
        .catch(error => console.log(error))
}

/* News card making section */
const newsSection = document.getElementById('news-section')
const dataInArray = data => {
    const load = data?.articles
    load?.forEach(news => {
        const div = document.createElement('div')
        div.classList.add("card", "card-side,", "bg-base-100", "shadow-xl", "md:flex-row", "flex-col")
        div.innerHTML = `
            <img class="md:w-1/4 w-full" src="${news.urlToImage !== null ? news.urlToImage : 'https://placeimg.com/200/280/arch'}">
            <div class="card-body py-2">
                <p class="text-lg text-primary font-semibold">${news.source.name}</p>
                <p class="text-lg font-semibold">${news.title}</p>
                <p>${news.description.slice(0, 200) + '...'}</p>
                <div class="card-actions justify-between items-center">
                    <h4 class="text-md font-semibold">${news.author !== null ? news.author : "No name found"}</h4>
                    <h4 class="text-xs">${news.publishedAt}</h4>
                    <button class="btn btn-primary">See Details</button>
                </div>
            </div>
        `
        newsSection.appendChild(div)
    })
    // console.log(load)
}
/* Default Newses */
loadData('https://newsapi.org/v2/everything?q=apple&from=2022-09-04&to=2022-09-04&sortBy=popularity&apiKey=f52659402bc34ee3b826484d13c93f62')


/* Categories Onclick Handler */
const apple = () => {
    newsSection.innerHTML = ``
    const appleApi = `https://newsapi.org/v2/everything?q=apple&from=2022-09-04&to=2022-09-04&sortBy=popularity&apiKey=f52659402bc34ee3b826484d13c93f62`
    loadData(appleApi)
}
const tesla = () => {
    newsSection.innerHTML = ``
    const teslaApi = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-05&sortBy=publishedAt&apiKey=f52659402bc34ee3b826484d13c93f62`
    loadData(teslaApi)
}
const business = () => {
    newsSection.innerHTML = ``
    const businessApi = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f52659402bc34ee3b826484d13c93f62`
    loadData(businessApi)
}
const techCrunch = () => {
    newsSection.innerHTML = ``
    const techCrunchApi = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f52659402bc34ee3b826484d13c93f62`
    loadData(techCrunchApi)
}
const wallStreet = () => {
    newsSection.innerHTML = ``
    const wallStreetApi = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f52659402bc34ee3b826484d13c93f62`
    loadData(wallStreetApi)
}