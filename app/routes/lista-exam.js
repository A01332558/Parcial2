import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		// return [
		// 	{
		// 		id: "1",
		// 		nombre: "WEB",
		// 		fecha: "hoy",
		// 	},
		// ];
		return this.store.findAll('exam');
	}
});
