angular-tree-repeat
===================

Source for the sf.treeRepeat module for AngularJS

About
-----

Work in progress...

Usage
-----

Whether you build the component, copy the raw source or use bower (see below),
the end result should be included in your page and the module `sf.treeRepeat`
included as a dependency:

    angular.module('myModule', ['sf.treeRepeat']);

Then use the directive `sf-tree-repeat` TODO: write this

Check out the examples in the demo folder for all the details.

Developing
----------

[Grunt](http://gruntjs.com/) is used as the build tool, so you will need
[node](http://nodejs.org/) and [npm](https://npmjs.org/) installed. Since v0.4,
grunt has 2 parts: the heavy lifting package `grunt` and the shell command
`grunt-cli`. If you haven't already installed `grunt-cli` globally, do so now
with:

    sudo npm install -g grunt-cli

To run the simple demo, install the npm dependencies for the build tools and go:

    npm install
    grunt demo

You can now view the demo at http://localhost:8000/

Build with `grunt dist` and choose a file from the `dist` directory.

Using the component
-------------------

For use with [bower](http://twitter.github.com/bower/), there is a separate
repo containing just the built artifacts here:
[angular-tree-repeat-bower](https://github.com/stackfull/angular-tree-repeat-bower).
You can add the component to your project with:

    bower install angular-tree-repeat

Or by adding a line to your `component.json` file.

If you are using `grunt` for your build, consider using a plugin like
[bowerful](https://npmjs.org/package/grunt-bowerful).

All comments to <paul@stackfull.com>

ChangeLog
---------

### 0.0.0 (08 Feb 2014)
Prototype

