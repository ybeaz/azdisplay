registerPlugin({
  install: function(less, pluginManager, functions) {
      functions.add('red', function() {
        return 'red !important'
      });
  },
  printUsage: function() {
    
  },
})