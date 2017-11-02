import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return
		[
			{
				nombre: "WEB",
				fecha: "hoy",
			},
		]
	}
});
