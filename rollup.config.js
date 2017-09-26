export default {
	input: 'index.js',
	indent: '\t',
	plugins: [],
	// sourceMap: true,
	output: [
		{
			format: 'es',
			file: 'build/orbitcontrols-es.module.js'
		}
  ],
  external: [
    "three"
  ]
};
