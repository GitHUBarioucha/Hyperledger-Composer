/**
 * Define this sale transaction
 * @param {org.acme.sintegralabsbc.SaleTransaction} saletransaction - The sale transaction.
 * @transaction
 */
function saleTransaction(saleTransaction) {
   
    var vehicle = saleTransaction.car;
    var buyer = saleTransaction.newOwner;
    var seller = saleTransaction.owner;
  
    //Check if the balance of the buyer is superior than the price of the car 
    if(buyer.balance < vehicle.price){
      throw new error ('Insufficient funds!')
    }
    
    //Update the balance of the seller 
    seller.balance += vehicle.price;
  
    //Update the balance od the buyer
    buyer.balance  -= vehicle.price;
 
    // Update the ownership in vehicle to the buyer ( saleTransaction.owner)
    vehicle.owner = buyer;
  
    // Get the asset registry for the asset in this case vehicle.
     return getAssetRegistry('org.acme.sintegralabsbc.Vehicle')
        .then(function (vehicleRegistry) {
            // Update the asset in the asset registry.
            return vehicleRegistry.update(vehicle);
        })
        .then(function () {
            return getParticipantRegistry('org.acme.sintegralabsbc.Customer')
        }).then (function (custumerRegistry) {
            // Update the participant buyer registry
            return custumerRegistry.update(buyer);
        }).then(function () {
            return getParticipantRegistry('org.acme.sintegralabsbc.Customer')
        }).then (function (custumerRegistry) {
            // Update the participant buyer registry
            return custumerRegistry.update(seller);
        });


}