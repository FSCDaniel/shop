const vm = Vue.createApp({
  data() {
    return {
      viewItem: "egg",
      languagePref: "en",
      egg: {
        kampung: [
          {
            sizeEN: "Large",
            sizeBM: "Besar",
            sizeCN: "大",
            price1: "12.50",
            price5: "60.00",
            images: "./images/egg.PNG"
          },
          {
            sizeEN: "Medium",
            sizeBM: "Serdahana",
            sizeCN: "中",
            price1: "11.50",
            price5: "55.00",
            images: "./images/egg.PNG"
          }
        ],
        economic: [
          {
            sizeEN: "Not consistent",
            sizeBM: "Tidak konsisten",
            sizeCN: "不一致",
            price1: "7.00",
            price5: "35.00",
            images: "./images/egg.PNG"
          }
        ],
        chicken: [
          {
            sizeEN: "AA",
            sizeBM: "AA",
            sizeCN: "AA",
            price1: "12.50",
            price5: "60.00",
            images: "./images/egg.PNG"
          },
          {
            sizeEN: "A",
            sizeBM: "A",
            sizeCN: "A",
            price1: "11.50",
            price5: "55.00",
            images: "./images/egg.PNG"
          },
          {
            sizeEN: "B",
            sizeBM: "B",
            sizeCN: "B",
            price1: "12.50",
            price5: "60.00",
            images: "./images/egg.PNG"
          },
          {
            sizeEN: "C",
            sizeBM: "C",
            sizeCN: "C",
            price1: "11.50",
            price5: "55.00",
            images: "./images/egg.PNG"
          },
          {
            sizeEN: "D",
            sizeBM: "D",
            sizeCN: "D",
            price1: "12.50",
            price5: "60.00",
            images: "./images/egg.PNG"
          },
          {
            sizeEN: "E",
            sizeBM: "E",
            sizeCN: "E",
            price1: "11.50",
            price5: "55.00",
            images: "./images/egg.PNG"
          }
        ]
      },
      garden: {
        bonsai: [
          {
            nameEN: "Bonsai 1",
            nameBN: "Tanah",
            nameCN: "",
            price: "2500.00",
            images: "./images/bonsai.PNG"
          },
          {
            nameEN: "Bonsai 2",
            nameBN: "Tanah",
            nameCN: "",
            price: "4500.00",
            images: "./images/bonsai.PNG"
          },
          {
            nameEN: "Bonsai 3",
            nameBN: "Tanah",
            nameCN: "",
            price: "6500.00",
            images: "./images/bonsai.PNG"
          }
        ],
        soil: [
          {
            nameEN: "Compose Soil",
            nameBN: "Tanah",
            nameCN: "",
            price: "25.00",
            images: "./images/bonsai.PNG"
          }
        ],
        fertiliser: [
          {
            nameEN: "Fertiliser",
            nameBN: "Tanah",
            nameCN: "",
            price: "25.00",
            images: "./images/bonsai.PNG"
          }
        ]
      }
    }
  },
  methods: {
    changeToEgg: function () {
      this.viewItem = "egg";
    },
    changeToGarden: function () {
      this.viewItem = "garden";
    },
    changeToEN: function () {
      this.languagePref = "en";
    },
    changeToBM: function () {
      this.languagePref = "bm";
    },
    changeToCN: function () {
      this.languagePref = "cn";
    },
  }
}).mount('#vue-app')