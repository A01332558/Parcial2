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
		}
	}
});
