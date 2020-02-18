import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      ratesData: {},
      amount: 0,
      selectedRate: 0,
      convertedAmount: 0
    },
    computed: {
      getRates: function() {
        return this.ratesData.rates;
      }
    },
    mounted() {
      this.fetchRatesData();
    },
    methods: {
      fetchRatesData: function(){
        const results = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.ratesData = data)
      },
      convertToEuro: function(rate){
        this.convertedAmount = Math.round(((this.amount/rate) + Number.EPSILON) * 100) / 100
      },
      convertFromEuro: function(rate){
        this.convertedAmount = Math.round(((this.amount*rate) + Number.EPSILON) * 100) / 100
      }
    }

  })

})



// getRates: function() {
//   return this.ratesData["rates"];
// },
// getRatesKeys: function(){
//   return Object.keys(this.getRates);
// },
// getRatesValues: function(){
//   return this.getRatesKeys.map(key => this.getRates[key]);
// }
