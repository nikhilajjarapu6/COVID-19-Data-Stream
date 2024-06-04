document.addEventListener('DOMContentLoaded', () => {
    let btns = document.querySelectorAll('.navbar button');
    const totalCases = document.querySelector('.analytics .one .first .p');
    const totalDeaths = document.querySelector('.analytics .one .second .p');
    const recovery = document.querySelector('.analytics .three .first .p');
    const active = document.querySelector('.analytics .three .thrird .p');
    const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

    function fetchCountryData(country) {
        let URL = 'https://disease.sh/v3/covid-19/countries/';
        var baseURL=`${URL}${country}`
        console.log(country);
        if(country==='all'){
            baseURL='https://disease.sh/v3/covid-19/all'
        }
    
        fetch(`${baseURL}`)
            .then(response => response.json())
            .then((data) => {

                totalCases.textContent = `${data.cases}`;
                totalDeaths.textContent = `${data.deaths}`;
                recovery.textContent = `${data.tests}`;
                active.textContent = `${data.active}`;
                // console.log(`${data.active}`);
            },3000)
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }

    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const country = btn.value;
            fetchCountryData(country);
        });
    });

    searchButton.addEventListener('click', () => {
        const searchValue = searchInput.value;
        if(searchValue!==''){
            fetchCountryData(searchValue)
        }
      });

    fetchCountryData('india')
});
