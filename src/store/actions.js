import Vue from 'vue';

export const loadData = ({commit})=>{
    Vue.http.get('data.json')
    .then(response=>response.json())
    .then(data=>{
        const stocks = data.stocks,
              funds=data.funds,
              stockPortfolio=data.stockPortfolio;

              const portfolio = {
                  stockPortfolio,
                  funds
              };

            commit('SET_STOCKS',stocks);
            commit('SET_PORTFOLIO',portfolio);
    })
}