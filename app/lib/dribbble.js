var http = require('http'),
		queryString = require('querystring'),
		HOST = 'api.dribbble.com';
var Dribbble = function(){};

Dribbble.prototype = {
	_request: function(path, query, cb){
		var options = {
			host: HOST,
			port: 80,
			path: path + "?" + queryString.stringify(query),
			method: "GET"
		};
		var req = http.request(options, function(res){
			var json = "";
			res.on('data', function(junk){
				json += junk;
			});
			res.on("end", function(){
				cb(JSON.parse(json));
			});
			res.on('error', function(e){
				cb(undefined);
			});
		});
		req.on('error', function(e){
			cb(undefined);
		});
		req.end();
	},
	getList: function(listName, params, cb){
		return this._request("/shots/"+listName, params, cb);
	},
	getShot: function(id, params, cb){
		return this._request("/shots/"+id, "", cb);
	},
	getComments: function(id, params,cb){
		return this._request("/shots/"+id+"/comments", params, cb);
	}
};

module.exports = Dribbble;