import DS from 'ember-data';

export default DS.Model.extend({
	opcion: DS.attr('string'),

	pregunta: DS.belongsTo('question'),
});
