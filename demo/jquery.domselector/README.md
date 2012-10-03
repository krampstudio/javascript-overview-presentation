jquery-editable-area
====================

A jQuery plugin that enables you to edit the content of web page blocks.

# Usage #

1. Add jQuery (>=1.7) and the plugin to your header:

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
<script type="text/javascript" src="/path/to/jquery.domselector.min.js"></script>    
```

2. Call the plugin on the targets that you want to edit. **The only restriction is that every targeted element MUST have an id**.

```javascript
$('.editable').editableArea();
```

## Options ##

Initialisation options:

* **cssClass** [String]: a css class used to flag all elements made editables, the elements hold the class even though they're not currently under edition. 
* **hoverClass** [String]: a css class to customize the style of editbale elements on mouse over.
* **ctrlBoxClass** [String]: a css class to customize the edition controls (the _save_ and _cancel_ links).
* **save** [Object]
 * **save.label** [String]: the label of the _Save_ control link
* **cancel** [Object]
 * **cancel.label** [String]: the label of the _Cancel_ control link
* **exclusive** [Boolean]: edit only one element at a time (_not yet implemented_) 

Sample:

```javascript
$('.editable').editableArea({
  'hoverClass' : 'edtiable-hover'
});
```

## Events ##

* **save.editableArea**: triggered when once element is saved. The event hold the saved values.

```javascript
$('.editable').bind('save.editableArea', function(event, values){
  //...
});
```

# Development #

## Build ##

Requires [node.js](http://nodejs.org) and [npm](https://npmjs.org/).

Install [grunt](http://gruntjs.org):

    npm install -g grunt

Build the plugin:

    git clone git@github.com:krampstudio/jQueryEditableArea.git
    cd jQueryEditableArea
    grunt

## Tests ##

The unit tests are made with [qunit](http://qunitjs.org/), you can either :
* run the tests from the browser by openning the test files (no web server needed)
* run the tests with grunt (it needs [phantomjs](http://phantomjs.org/) to be installed on your system): `grunt qunit`

# License #

**GNU GPL v3**

> jQuery Editable Area plugin
>
> Copyright (C) 2012  Bertrand CHEVRIER, KrampStudio
> 
> This program is free software: you can redistribute it and/or modify
> it under the terms of the GNU General Public License as published by
> the Free Software Foundation, either version 3 of the License, or
> (at your option) any later version.
>
>  This program is distributed in the hope that it will be useful,
>  but WITHOUT ANY WARRANTY; without even the implied warranty of
>  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
>  GNU General Public License for more details.
>
>You should have received a copy of the GNU General Public License
>along with this program.  If not, see <http://www.gnu.org/licenses/>