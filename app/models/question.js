import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	correcta: DS.attr('boolean'),

	opciones: DS.hasMany('option'),
	examen: DS.belongsTo('exam'),
});
