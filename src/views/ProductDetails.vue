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
          <div class="error">{{ error }}</div>
          <table>
            <tr>
              <th rowspan="2"></th>
              <th rowspan="2">Merchant Name</th>
              <th rowspan="2">Price</th>
              <th rowspan="2">Rating</th>
              <th colspan="3">Attributes</th>
            </tr>
            <tr>
              <th>Color</th>
              <th>Theme</th>
              <th>Size</th>
            </tr>
            <tr v-for="(merchant,i) in merchants" v-bind:key="i">
              <td>
                <input
                  v-model="radioSelecter"
                  type="radio"
                  name="merchant"
                  @click="changeValue(i)"
                  v-bind:value="merchant.merchantId"
                  >
              </td>
              <td>{{merchant.merchantName}}</td>
              <td>{{merchant.cost}}</td>
              <td>{{merchant.productRating}}</td>
              <td>{{merchant.color}}</td>
              <td>{{merchant.theme}}</td>
              <td>{{merchant.size}}</td>
            </tr>
          </table>
        </div>
        <div class="btn">
          <div>
            <button class="myBtn" @click.prevent="addToCart($event)">Add To Cart</button>
          </div>
          <!-- <div>
            <button class="myBtn">Buy Now</button>
          </div> -->
        </div>
        <div class="error">{{ errormsg }}</div>
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
      productId: "",
      productName: "",
      imageURL: "",
      merchantId: localStorage.getItem('userId'),
      quantity: 1,
      price: 0,
      radioSelecter: false,
      error:'',
      errormsg: '',
    };
  },
  created() {
    this.$store.dispatch("getProductDetails", {
      params: {
        pid: this.$route.params["pid"]
      }
    });
    this.$store.dispatch("getMerchantByProductId", {
      params: {
        pid: this.$route.params["pid"]
      }
    });
  },
  computed: {
    ...mapGetters(["productGetter", "merchantsGetter","addToCartResponseGetter"]),
    productDetails() {
      // window.console.log('this is response of product'+this.productGetter);
      return this.productGetter;
    },
    merchants() {
      // window.console.log(this.merchantsGetter);
      return this.merchantsGetter;
    },
    addToCartResponse() {
      return this.addToCartResponseGetter;
    }
  },
  methods: {
    changeValue(i){
      this.radioSelector=true
      this.merchantId=this.merchants[i].merchantId
      this.price=this.merchants[i].cost
    },
    productDetailsSuccess() {
       let cid = localStorage.getItem('userId');

window.console.log('cid inside pd: '+cid)
      if(this.addToCartResponse.resultCode==100){
        this.$router.push({name: 'cart', params: {cid}})
      }else{
        this.errormsg = "Problem in adding to cart!"
      }
    },
    addToCart(e) {
      e.preventDefault();
      if(!this.radioSelector){
        this.error = "Please select a merchant"
        //window.console.log('yoyo honey singh')
        return false;
      }

      // window.console.log('merchant id is: '+this.merchantId)
    
  
      // window.console.log('Price is: '+this.price);
      let cartProduct = {
        productId : this.productDetails.productId,
        productName : this.productDetails.productName,
        imageURL : this.productDetails.imageURL,
        merchantId : this.merchantId,
        quantity : 1,
        price : this.price
      }

      

      let userId = localStorage.getItem('userId')

      // if(localStorage.getItem('userRole')=='customer' && localStorage.getItem('userId')!=''){
      //   userId = localStorage.getItem('userId');
      // }else{
      //   userId = localStorage.getItem('guestId');
      // }

      
      let data = {
        userId: userId,
        cartProduct: cartProduct
      }

      //window.console.log(data);


      this.$store.dispatch('addToCart', {
        params: {
          data: data
        },
        success: this.productDetailsSuccess
      });

      //let customerId = this.addToCartResponse.Cart.customerId;

      //this.$router.push({name: '/'});

      //window.console.log(this.addToCartResponse.resultCode)

     

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
.category__image:hover{
  transform: scale(1.25);
}
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
/* .button {
  padding: 10px 20px;
  background: #f2784b;
  color: #fff;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 700;
}
.button:hover {
  background: #fff;
  color: #f2784b;
  border: 1px solid currentColor;
} */
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
.error {
    text-align: center;
    color: red;
  }
/* th{background-color: rgb(150, 146, 146);} */
/* .scroll{
  overflow-y:auto;
  display:block; 
  height:150px ;border:1px solid black;
} */
</style>