<template>
  <main class="product__details">
    <div class="productdetails">
      <div class="innerdiv">
        <div class="category__image">
          <img id="myImage" :src="productDetails.imageURL" alt="no image" />
        </div>
        <div id="details">
          <h3>Name: {{productDetails.productName}}</h3>
          <h4>Price: {{productDetails.defaultPrice}}</h4>
          <h4>Description: {{productDetails.description}}</h4>
          <!-- <h4>Attributes: </h4>
            <div v-for="cat in categories" v-bind:key="cat.categoryId">
              <div v-if="cat.categoryId == productDetails.categoryId">
                <div v-for="att in cat.attributeList" v-bind:key="att.att">
                  <p>{{ att || 'NA' }}</p>
                </div>
              </div>
            </div>
          <h4>Ratings: {{ 'NA' }}</h4>-->
        </div>
      </div>
      <div class="innerdiv">
        <div>
          <table>
            <tr>
              <th></th>
              <th>Merchant Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th colspan="3">Attributes</th>
            </tr>
            <tr v-for="merchant in merchants" v-bind:key="merchant.merchantId">
              <td>
                <input
                  v-model="radioSelecter"
                  type="radio"
                  name="merchant"
                  v-bind:value="merchant.merchantId"
                />
              </td>
              <td>{{merchant.merchantName}}</td>
              <td>{{merchant.cost}}</td>
              <td>{{merchant.productRating}}</td>
              <td>{{merchant.color}}</td>
              <td>{{merchant.theme}}</td>
              <td>{{merchant.size}}</td>
            </tr>
          </table>
          {{error}}
        </div>
        <div class="btn">
          <div>
            <button class="button" @click="addToCart($event)">Add To Cart</button>
          </div>
          <div>
            <button class="button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductDetails",
  data: function() {
    return {
      product: {},
      //userId: Math.random()*100,
      productId: "",
      productName: "",
      imageURL: "",
      merchantId: "",
      quantity: 1,
      price: 0,
      // radioSelecter: false,
      error:''
    };
  },
  created() {
    this.$store.dispatch("getProductDetails", {
      params: {
        pid: "5e283342f1c5dc06e4629513" //this.$route.params["pid"]
      }
    });
    this.$store.dispatch("getMerchantByProductId", {
      params: {
        pid: "5e283342f1c5dc06e4629513" //this.$route.params["pid"]
      }
    });
  },
  computed: {
    ...mapGetters(["productGetter", "merchantsGetter", "guestIdGetter"]),
    productDetails() {
      // window.console.log('this is response of product'+this.productGetter);
      return this.productGetter;
    },
    merchants() {
      // window.console.log(this.merchantsGetter);
      return this.merchantsGetter;
    },
    guestId() {
      return this.userIdGetter;
    }
  },
  methods: {
    addToCart(e) {
      e.preventDefault();
      if(this.radioSelector==''){
        this.error = "Please select a merchant"
        return false;
      }



      this.$store.dispatch("getGuestId");
      // let data = {
      //   guestId: this.guestId,
      //   cartProduct: {
      //     productId: this.productDetails.productId
      //   }
      // };
    }
  }
};
</script>

<style scoped>
.category__image {
  height: 400px;
  width: 500px;
  transition: transform 0.8s;
}
/* .category__image:hover{
  transform: scale(1.5);
} */
.category__image > img {
  height: 100%;
  width: 100%;
}
.productdetails {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}
.innerdiv {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.innerdiv > div {
  margin: 20px;
}
.button {
  padding: 10px 20px;
  background: #f2784b;
  color: #fff;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 700;
  /* margin-right: 30px; */
}
.button:hover {
  background: #fff;
  color: #f2784b;
  border: 1px solid currentColor;
}
.btn {
  display: flex;
  justify-content: space-between;
}
.btn > div {
  margin: 20px;
  padding-left: 50px;
}
.btn > div > div {
  margin: 20px;
}
table,
tr,
td,
th {
  padding: 10px;
}
table {
  /* border:1px solid black; */
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
th,
td {
  text-align: center;
  padding: 8px;
  border: 1px solid black;
}
#details {
  text-align: center;
  margin-top: 10%;
}
/* th{background-color: rgb(150, 146, 146);} */
/* .scroll{
  overflow-y:auto;
  display:block; 
  height:150px ;border:1px solid black;
} */
</style>