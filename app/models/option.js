import DS from 'ember-data';

export default DS.Model.extend({
	num: DS.attr('string'),
	nombre: DS.attr('string'),
	correcta: DS.attr('boolean'),
	pregunta: DS.belongsTo('question'),
});
