Package.describe({
	summary: "Add Polymer Base to meteor Project",
	version: "1.0.4",
	git: "https://github.com/mirikle/meteor-polymer.git",
	name: 'polymer'
});

Npm.depends({
	bower: '1.3.12'
});

Package.onUse(function(api) {
	api.use('webapp', 'server');
  	api.use(['templating'], 'client');
  	api.use(['underscore'], ['client', 'server']);
	api.versionsFrom('METEOR@0.9.0');
	api.addFiles('polymer.js', 'server');
	api.addFiles('import.html', 'client');
});