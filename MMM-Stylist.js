/* global Module */

/* Magic Mirror
 * Module: MMM-Stylist
 *
 * By Alec Keller
 * {{LICENSE}} Licensed.
 */

Module.register("MMM-Stylist", {
	
	defaults: {
		text: "Hello World!"
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function() {
		Log.log(this.name + ' started');
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},

	// getStyles() {
	// 	return ['font-awesome.css', 'MMM-Stylist.css'];
	// },

	// getScripts: function() {
	// 	return ['moment.js'];
	// },


});
