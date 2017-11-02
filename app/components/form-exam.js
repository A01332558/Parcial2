import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    borrar(id){
      alert("Borrar..." + id);
    }
  }
});
