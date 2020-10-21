    function flipArgs(func) {
        return function() {
            func(...Array.from(arguments).reverse());
        }
    }

    var flipped = flipArgs(function() {
        console.log(arguments);
    });

    export {
        flipArgs,
        flipped
      };