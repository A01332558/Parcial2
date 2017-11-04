import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),
	actions: {
    borrar(){
      this.get('exam').destroyRecord();
      this.sendAction('seBorro');
    },
    guardar(){
    	let exam = this.get('exam');
    	// alert(exam.nombre);
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
        examen: this.get('exam')
      });
      let res1= pregunta.get('opciones').createRecord({
        num: "1)",
        nombre: "",
        pregunta: pregunta,
        correcta: false, 
      });
      let res2= pregunta.get('opciones').createRecord({
        num: "2)",
        nombre: "",
        pregunta: pregunta,
        correcta: false, 
      });
      let res3= pregunta.get('opciones').createRecord({
        num: "3)",
        nombre: "",
        pregunta: pregunta,
        correcta: false, 
      });
      let res4= pregunta.get('opciones').createRecord({
        num: "4)",
        nombre: "",
        pregunta: pregunta,
        correcta: false, 
      });
    }
  }
});
