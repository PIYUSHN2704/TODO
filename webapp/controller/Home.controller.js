sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.todo.TO-DO.controller.Home", {
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();

		},
		onAddToDo: function(){
			this.oRouter.navTo("AddToDo");
			
		},
		onPendingToDo: function(){
			this.oRouter.navTo("PendingToDo");
		},
		
	});
});