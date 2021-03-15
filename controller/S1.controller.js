sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/Fragment",
  "sap/ui/model/Filter",
  "sap/ui/model/json/JSONModel"

], function(Controller, Fragment, Filter,JSONModel) {
  "use strict";

  return Controller.extend("VishwakarmaMart.S1", {
      onInit: function() {
     var oViewModel = new JSONModel({
				welcomeCarouselShipping: 'img/econs.jpeg',
				Ballu: 'img/Ballu.jpg',
				cement: 'img/cement.jpg',
				gitti: 'img/gitti.jpg',
				IronRod:'img/IronRod.jpg',
				wood:'img/wood.jpg',
				plywood:'img/plywood.jpg',
				Labour:'img/Labour.jpg',
				Promoted: [],
				Viewed: [],
				Favorite: [],
				Currency: "INR"
			});
			this.getView().setModel(oViewModel, "view");
    },
    
    onInitalBtnPress:function(){
       
    }
  });
});