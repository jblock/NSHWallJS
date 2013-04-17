# Robowall!
=========

## Installation Instructions

Run bundler

```
bundle install
```

Run Guard
```
bundle exec guard
```

Load the index.html in some form (I use Anvil for the mac, but you can just load the file as-is). TODO: Set up a sinatra server so we can have nice websockets and stuff. 

---
## General Thingies

Put all libraries (jquery, backbone, packery) into the `src/js/libs` folder. Then, make sure to add a reference to the `config/assets.yml` file where all the other libraries are. Make sure it loads in the right order.


