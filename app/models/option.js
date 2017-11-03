import DS from 'ember-data';

export default DS.Model.extend({
	opcion: DS.attr('string'),
	correcta: DS.attr('boolean'),
	pregunta: DS.belongsTo('question'),
});
