sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.todo.TO-DO.controller.AddToDo", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.todo.TO-DO.view.AddToDo
		 */
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter();
			this.getUser();
			this.getUserPendingTODO();

		},
		onAddToDo: function () {
			var data_title = this.getView().byId("idInput").getValue();
			var data_description = this.getView().byId("iddescription").getValue();
			var data_expiry_date = this.getView().byId("idDatePicker").getValue();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "/TODO/addToDo",
				contentType: "application/json",
				 
				data: JSON.stringify({

					userId: 1,
					title: data_title,
					description: data_description,
					expiryDate: "Dec 15, 2019"
				}),

				
				success: function (data) {
			

				}.bind(this),
				error: function () {

				}.bind(this)
			});

		},
		getUser: function () {
			$.ajax({
				type: "GET",
				url: "/TODO/getCountUserToDos/",
				data:{
					userId: 1
				},
				contentType: "application/json",
				success: function (data) {

				}.bind(this),
				error: function (error) {

				}.bind(this)
			});
		},
	getUserPendingTODO: function () {
			$.ajax({
				type: "GET",
				url: "/TODO/getCountUserPendToDos/",
				data:{
					userId: 1
				},
				contentType: "application/json",
				success: function (data) {

				}.bind(this),
				error: function (error) {

				}.bind(this)
			});
		},
		onHome: function () {
			this.oRouter.navTo("RouteHome");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.todo.TO-DO.view.AddToDo
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.todo.TO-DO.view.AddToDo
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.todo.TO-DO.view.AddToDo
		 */
		//	onExit: function() {
		//
		//	}

	});

});