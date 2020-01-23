<template>
      <div class="category">

<span>CATEGEORY:<br><select>
               <option >mugs</option>
               <option>keychains</option>
               <option>category-3</option>
               <option>four</option>
               <option>five</option>
               <option>six</option>
             </select>
</span><br><br>
Product Name:<input type="text">
<br><br>
<button @click="$router.push('/MerchantAddToProduct')">Next</button>




      </div>
</template>

<script>
export default {
    name: 'MerchantProductCheck'
}
</script>

<style scoped>
.category{
  border: 2px solid black;
  width: 200px;
  height: 200px;
  text-align: center;
  margin-top: 3%;
  padding: 20px;
  margin-left: 40%;
  background-color: antiquewhite
}
select{
  width: 200px;
  height: 40px
}
input{
  font-size: 20px
}
button:hover{
  width:100px;
  text-align: center;
  background-color:cornsilk
}

</style>