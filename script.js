const vm = Vue.createApp({
  data() {
    return {
      viewItem: "garden",
      kampung: [
        {
          size: "BESAR",
          o: "12.50",
          f: "60.00",
          pic: "./images/egg.png",
        },
        {
          size: "SERDAHANA",
          o: "12.00",
          f: "57.50",
          pic: "./images/egg.png",
        }
      ],
      economic: [
        {
          o: "7.00",
          pic: "./images/egg.png",
        }
      ],
      chicken: [
        {
          size: "AA",
          o: "12.50",
          f: "60.00",
          pic: "./images/egg.png",
        },
        {
          size: "BB",
          o: "12.00",
          f: "57.50",
          pic: "./images/egg.png",
        },
        {
          size: "CC",
          o: "12.50",
          f: "60.00",
          pic: "./images/egg.png",
        },
        {
          size: "DD",
          o: "12.00",
          f: "57.50",
          pic: "./images/egg.png",
        },
        {
          size: "EE",
          o: "12.50",
          f: "60.00",
          pic: "./images/egg.png",
        },
        {
          size: "FF",
          o: "12.00",
          f: "57.50",
          pic: "./images/egg.png",
        }
      ],
      bonsai: [
        {
          name: "bonsai A",
          year: "10",
          price: "8000.00",
          pic: "./images/bonsai.png",
        },
        {
          name: "bonsai B",
          year: "20",
          price: "20000.00",
          pic: "./images/bonsai.png",
        }
      ],
      soil: [
        {
          name: "Soil",
          weight: "1",
          price: "100.00",
          pic: "./images/bonsai.png",
        },
        {
          name: "Fertilizer",
          weight: "1",
          price: "100.00",
          pic: "./images/bonsai.png",
        }
      ]
    }
  },
  methods: {
    changeToEgg: function () {
      console.log("Egg")
      this.viewItem = "egg";
    },
    changeToGarden: function () {
      console.log("Garden")
      this.viewItem = "garden";
    }
  }
}).mount('#vue-app')