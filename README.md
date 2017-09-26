# three-orbit-controls-es
Orbit Controls for three.js as an es module, with type definitions.

[![NPM](https://nodei.co/npm-dl/three-orbit-controls-es.png)](https://nodei.co/npm-dl/three-orbit-controls-es/)

This is taken from the original OrbitControls example in three.js, but modified so:
1) It uses modules and exports as one, rather than requiring all of three.js
2) It has a dependency on three.js. This means it's tied to a specific verison of three.js.

This package is similar to some existing ones but modified for our needs. Might be useful for others. See [this issue for the rationale](https://github.com/mattdesl/three-orbit-controls/issues/17).

Like the other similar packages - All credit goes to [OrbitControls.js][original_orbitcontrols] contributors. This just exports it as an es module, to make it better suited for our build.

This only works in environments where `import { X } from "y"` works (or is transpiled, e.g with webpack).

```javascript
import { PerspectiveCamera, WebGLRenderer } from "three"
import { OrbitControls } from "three-orbit-controls-es"

// Init THREE scene (add your code)

var camera = new PerspectiveCamera(75, width / height, 0.1, 1000)
camera.position.z = 5

var renderer = new WebGLRenderer({ canvas })

var controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.enableZoom = false
```

To install:

```bash
npm install three-orbit-controls-es --save
```

Note: If you don't have the same version of three-js, this will have its own. Consider that in your dependency planning (we'll try to keep this updated as we update three.js).

There are other packages similar to this one: [three-orbit-controls], [three-orbitcontrols].

License is the same as [three.js], i.e. [MIT].

[original_orbitcontrols]: https://github.com/mrdoob/three.js/tree/master/examples/js/controls/OrbitControls.js "OrbitControls.js"
[three.js]: http://threejs.org/ "three.js"
[MIT]: https://github.com/mrdoob/three.js/blob/master/LICENSE "three.js license"
[three-orbit-controls]: https://www.npmjs.com/package/three-orbit-controls "three-orbit-controls"
[three-orbitcontrols]: https://www.npmjs.com/package/three-orbit-controls "three-orbitcontrols"
