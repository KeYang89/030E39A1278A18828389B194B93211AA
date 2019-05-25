define(function(){

    var QUERY_PARAM = 'noext';

    //API
    return {
        load : function(name, req, onLoad, config){
            req([req.toUrl(name)], function(mod){
                onLoad(mod);
            });
        },
        normalize : function(name, norm){
            //append query string to avoid adding .js extension
            //needs to be on normalize otherwise it won't work after build
            name += (name.indexOf('?') < 0)? '?' : '&';
            return name + QUERY_PARAM +'=1';
        }

    };
});
