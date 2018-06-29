<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <div class="panel-title">
                        {{stock.name}}
                        <small>(PRICE : {{stock.price}} | Quantity : {{stock.quantity}})</small>
                </div>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number"
                           class="form-control"
                           placeholder="Quantity"
                           v-model="quantity"
                           >
                </div>
                    <div class="pull-right">
                        <button  class="btn btn-success" :class="{'btn-danger':insufficientQuantity}" @click="sellStock" 
                        :disabled="insufficientQuantity || quantity<=0 || Number.isInteger(quantity)">
                           {{insufficientQuantity ? 'Not Enough Stock' : 'SELL'}}
                        </button>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['stock'],
    data(){
        return{
            quantity:0
        }
    },
    computed:{
        insufficientQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods:{
        sellStock(){
            const order={
                stockId:this.stock.id,
                stockPrice:this.stock.price,
                quantity:this.quantity
            };
            console.log(order);
            this.$store.dispatch('sellStock',order);
            this.quantity=0;
        }
    }
}
</script>

