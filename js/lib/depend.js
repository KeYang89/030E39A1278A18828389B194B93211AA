define(function () {

    var rParts = /^(.*)\[([^\]]*)\]$/;

    return {

        //example: depend!bar[jquery,lib/foo]
        load : function(name, req, onLoad, config){
            var parts = rParts.exec(name);

            req(parts[2].split(','), function(){
                req([parts[1]], function(mod){
                    onLoad(mod);
                });
            });
        }

    };

});
