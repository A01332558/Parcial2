import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		 borrar(){
      this.get('exam').destroyRecord();
    },
	}
});
