import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		var id = params.id;
		return this.store.find('exam', id);
		// let exam = {
		// 	id: "1",
		// 		nombre: "WEB",
		// 		fecha: "hoy",
		// };

		// return exam;
	}
});
