const ctx = document.querySelector('#myChart');
let typed = new Typed('#element', {
    strings: ['Bonjour! ', 'Voici le cours du Bitcoion en euro entre le premier janvier 2023 et le premier janvier 2024', 'A votre avis, est-ce que c\'est le moment d\'investir?^1000'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=2023-01-01&end=2024-01-01';
    const getBtcPrice = async () => {
        try{
            const res = await axios.get(api);
            let price = Object.values(res.data.bpi);
            let date = Object.keys(res.data.bpi);
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                        label: 'Prix du BitCoin',
                        data: price,
                        borderColor: 'blue',
                        fill: true,
                    }]
                },
            })
        }
        catch(err) {
        console.log(err);
        }
}


getBtcPrice();
