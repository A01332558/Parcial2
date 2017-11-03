import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	actions: {
    borrar(){
      this.get('exam').destroyRecord();
    },
    guardar(){
    	let exam = this.get('exam');
    	alert(exam.nombre);
    	exam.save().then(()=>{
        return Ember.RSVP.all(exam.get('preguntas').invoke('save')).then((arrOpt)=>{
          for(var i = 0, len = arrOpt.length;i<len; i++){
            return Ember.RSVP.all(arrOpt[i].get('opciones').invoke('save')).then(()=>{
          })
        }
        }).then(()=>{
            alert("Guardado");
            this.sendAction('didSave');
        })
      });
    },
    pnueva(){
      let pregunta = this.get('store').createRecord('question', {
        exam: this.get('exam')
      });
      let res1= pregunta.get('opciones').createRecord({
        nombre: "1)",
        pregunta: pregunta,
        correcta: true, 
      });
      let res2= pregunta.get('opciones').createRecord({
        nombre: "2)",
        pregunta: pregunta,
        correcta: false, 
      });
      let res3= pregunta.get('opciones').createRecord({
        nombre: "3)",
        pregunta: pregunta,
        correcta: false, 
      });
      let res4= pregunta.get('opciones').createRecord({
        nombre: "4)",
        pregunta: pregunta,
        correcta: false, 
      });
    }
  }
});
