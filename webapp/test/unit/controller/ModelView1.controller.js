/*global QUnit*/

sap.ui.define([
	"kpmg/home/Exercise2/controller/ModelView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ModelView1 Controller");

	QUnit.test("I should test the ModelView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});