const vm = Vue.createApp({
  data() {
    return {
      viewItem: "egg",
      kampung: [
        {
          size: "BESAR",
          o: "12.50",
          f: "60.00",
          pic: "egg.png",
        },
        {
          size: "SERDAHANA",
          o: "12.00",
          f: "57.50",
          pic: "egg.png",
        }
      ],
      chicken: [
        {
          size: "AA",
          o: "12.50",
          f: "60.00",
          pic: "egg.png",
        },
        {
          size: "BB",
          o: "12.00",
          f: "57.50",
          pic: "egg.png",
        },
        {
          size: "CC",
          o: "12.50",
          f: "60.00",
          pic: "egg.png",
        },
        {
          size: "DD",
          o: "12.00",
          f: "57.50",
          pic: "egg.png",
        },
        {
          size: "EE",
          o: "12.50",
          f: "60.00",
          pic: "egg.png",
        },
        {
          size: "FF",
          o: "12.00",
          f: "57.50",
          pic: "egg.png",
        }
      ],
      bonzai: [
        {
          name: "Bonzai A",
          year: "10",
          price: "8000.00",
          pic: "images/garden/bonzai.png",
        },
        {
          name: "Bonzai B",
          year: "20",
          price: "20000.00",
          pic: "images/garden/bonzai.png",
        }
      ],
      soil: [
        {
          name: "Soil",
          weight: "1",
          price: "100.00",
          pic: "images/garden/bonzai.png",
        },
        {
          name: "Fertilizer",
          weight: "1",
          price: "100.00",
          pic: "images/garden/bonzai.png",
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