import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		var id = params.id;
		return this.store.find('exam', id);
		// let exam = {
		// 	nombre: "WEB",
		// 	fecha: "hoy",
		// 	preguntas: [
		// 		{
		// 			nombre: "2+2",
		// 			opciones: [
		// 				{
		// 					nombre: "1",
		// 					correcta: false,
		// 				},
		// 				{
		// 					nombre: "2",
		// 					correcta: false,
		// 				},
		// 				{
		// 					nombre: "3",
		// 					correcta: false,
		// 				},
		// 				{
		// 					nombre: "4",
		// 					correcta: false
		// 				}
		// 			]
		// 		},
		// 		{
		// 			nombre: "4+4",
		// 			opciones: [
		// 				{
		// 					nombre: "1",
		// 					correcta: false,
		// 				},
		// 				{
		// 					nombre: "2",
		// 					correcta: false,
		// 				},
		// 				{
		// 					nombre: "3",
		// 					correcta: false,
		// 				},
		// 				{
		// 					nombre: "4",
		// 					correcta: false
		// 				}
		// 			]
		// 		}
		// 	]
		// };

		// return exam;
	}
});
