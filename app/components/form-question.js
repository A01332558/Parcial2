import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		remover(){
			this.get('pregunta.opciones').then((array)=>{
				array.invoke('destroyRecord');
			});
			this.get('pregunta').destroyRecord();
		}
	},
	resCorrecta: Ember.computed.filter('pregunta.opciones', function(item, index){ 
			return !!item.get('correcta');
		}),
		// totalOpciones: Ember.computed('pregunta', {
		// 	get: function(){
		// 		return `Total: ${this.get('pregunta.length')} opciones`;
		// 	},
		// 	set: function(key, value){
		// 		return value;
		// 	}
		// })
});
