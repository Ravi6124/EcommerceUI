<template>
  <main class="product__details">
      <div class="productdetails">
        <div class="innerdiv">
          <div class="category__image">
            <img id="myImage" :src="productDetails.imageURL" alt="no image">
          </div>
          <div>
            <h3>Name: {{productDetails.productName}}</h3>
            <h4>Price: {{productDetails.defaultPrice}}</h4>
            <h4>Description: {{productDetails.description}}</h4>
            <h4>Attributes: {{ productDetails.attribute || 'NA' }}</h4>
            <h4>Ratings: {{ productDetails.rating || 'NA' }}</h4>
          </div>
        </div>
        <div class="innerdiv">
          <div class="btn">
            <div>
              <button class="button">Add To Cart</button>
            </div>
            <div>
              <button class="button">Buy Now</button>
            </div>
          </div>
          <div>
            <fieldset>
              Other offers:
            </fieldset>
          </div>
        </div>
      </div>
    
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProductDetails',
    data: function(){
      return {
        product : {}
      }
    },
    created() {
      this.$store.dispatch('getProductDetails', {
        params: {
        pid: this.$route.params["pid"]
      }
      });
    },
    computed: {
      ...mapGetters(["productGetter"]),
      productDetails() {
        // window.console.log('this is response of product'+this.productGetter);
        return this.productGetter;
      }
    }
}
</script>

<style scoped>
.category__image{
  height: 400px;
  width: 500px;
}
.category__image > img{
  height: 100%;
  width: 100%;
}
.productdetails{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
}
.innerdiv{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.innerdiv > div{
  margin: 20px;
}
.button {
  padding: 10px 20px;
  background: #F2784B;
  color: #fff;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 700;
  /* margin-right: 30px; */
}
.btn{
  display: flex;
  justify-content: space-between;
}
.btn > div{
  margin: 20px;
  padding-left: 50px;
}
.btn > div > div{
  margin: 20px;
}
</style>