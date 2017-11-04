import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		nuevo(){
			var exam = this.store.createRecord('exam', {
				nombre:"",
				fecha:"",
			});
			exam.save();
			this.transitionToRoute('exam-detail', exam.id);
		},
		
	},
	// totalExamen: Ember.computed('model.[]',{
	// 		get: function(){
	// 			return "Total:" + this.get('model.length') + "examenes";
	// 		},
	// 		set: function(key, value){
	// 			return value;
	// 		}
	// 	}),
});
