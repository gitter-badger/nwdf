# nwdf - Nodejs Web Development Framework.

[![Join the chat at https://gitter.im/CreDevLabz/nwdf](https://badges.gitter.im/CreDevLabz/nwdf.svg)](https://gitter.im/CreDevLabz/nwdf?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

NWDF is module based framework to create web based applications more freely with reusable code.

### Component List
- [ ] [Module Manager](https://github.com/CreDevLabz/nwdf-module-manager)
- [ ] [Routing](https://github.com/CreDevLabz/nwdf-routing)
- [ ] [Event Manager](https://github.com/CreDevLabz/nwdf-event-manager)
- [ ] [Backend](https://github.com/CreDevLabz/nwdf-backend)
- [ ] [Theme](https://github.com/CreDevLabz/nwdf-theme)
- [ ] [URL Rewriting](https://github.com/CreDevLabz/nwdf-url-rewriting)

```
npm install github:credevlabz\nwdf
```

#### index.js  
```
var app = require("nwdf");
app.useDI(true); //true/false. Default false
app.initialize();
app.load(90); //port optional. Default 90
