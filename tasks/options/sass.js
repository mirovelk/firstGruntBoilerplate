module.exports = {
	dev: {
		options: {
			style: 'expanded',			
			compass: true
		},
		files: {
			'stylesheets/build/screen.min.css': 'stylesheets/src/screen.scss',
			'stylesheets/build/print.min.css': 'stylesheets/src/print.scss'
		}
	},
	dist: {                            
		options: {                       
			style: 'compressed',
			compass: true
		},
		files: {                        
			'stylesheets/build/screen.min.css': 'stylesheets/src/screen.scss',
			'stylesheets/build/print.min.css': 'stylesheets/src/print.scss'
		}
	}
}