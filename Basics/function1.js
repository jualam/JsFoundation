function orderTea(teaType){
    function confirmOrder(teaType){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder(teaType);
}
let orderconfirmation=orderTea("Mango tea");
console.log(orderconfirmation)