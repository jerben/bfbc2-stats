const DbController = require('../DbController.js');

exports.getAllPlayerStats = (args, res, next) => {
    /**
     * Returns all available stats of a player.
     *
     * id String 
     * returns Player
     **/
    var examples = {};
    examples['application/json'] = {
        "kills": 1.3579000000000001069366817318950779736042022705078125,
        "hs_k": 1.3579000000000001069366817318950779736042022705078125,
        "hs_m": 1.3579000000000001069366817318950779736042022705078125,
        "id": "aeiou",
        "time": 1.3579000000000001069366817318950779736042022705078125,
        "weapons": [{
            "kills": 1.3579000000000001069366817318950779736042022705078125,
            "hs_k": 1.3579000000000001069366817318950779736042022705078125,
            "hs_m": 1.3579000000000001069366817318950779736042022705078125,
            "label": "aeiou",
            "deaths": 1.3579000000000001069366817318950779736042022705078125
        }],
        "deaths": 1.3579000000000001069366817318950779736042022705078125,
        "k_s": 1.3579000000000001069366817318950779736042022705078125,
        "connections": 1.3579000000000001069366817318950779736042022705078125
    };
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
};

exports.getSuggestions = (args, res, next) => {
    const part = args.part.value;
    const controller = new DbController().connect();

    controller.getAllPlayerNames().then(val => {
        const suggestions = {
            suggestions: val.filter(cur => cur.name.includes(part))
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(suggestions));
    });
};
