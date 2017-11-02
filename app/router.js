import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista-exam');
  this.route('lista-question');
  this.route('exam-detail');
});

export default Router;
