module.exports = function(grunt){
	grunt.initConfig({
		pkg: '<json:package.json>',
        meta: {
            banner: '/**\n * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
					' * <%= pkg.name %> - v<%= pkg.version %> \n' +
					' * @author <%=pkg.author.name%> <<%=pkg.author.email%>>\n' +
					' * @license <%= _.pluck(pkg.licenses, "url").join(", ")\n */'
        },
		min : {
			dist : {
				src: 'src/jquery.domselector.js',
				dest: 'jquery.domselector.min.js'
			}
		},
		concat : {
			dist : {
				src : [ '<banner>', 'jquery.domselector.min.js'],
				dest: 'jquery.domselector.min.js'
			}
		},
		qunit : { all : ['test/*.html'] },
		lint : { files : ['src/*.js'] },
		jshint : {
			options: {
				browser : true,
				smarttabs : true
			},
			globals: {
				jQuery : true
			}
		}
	});
    grunt.registerTask('default', 'min concat');
};
