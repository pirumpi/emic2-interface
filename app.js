var tessel = require('tessel');
var router = require('tiny-router');
var emic2 = require('emic2').use(tessel.port['A']);

router
	.use('static', {path: './static'})
	.get('/language/{lan}', function(req, res){
		emic2.setLanguage(req.body.lan);
		res.send('ok');
	})
	.get('/volume/{vol}', function(req, res){
		emic2.setVolume(parseInt(req.body.vol));
		res.send('ok');
	})
	.get('/rate/{rate}', function(req, res){
		emic2.setRate(parseInt(req.body.rate));
		res.send('ok');
	})
	.get('/voice/{voice}', function(req, res){
		emic2.setVoice(parseInt(req.body.voice));
		res.send('ok');
	})
	.get('/message/{message}', function(req, res){
		emic2.speak(urldecode(req.body.message));
		res.send('ok');
	});

emic2.on('ready', function(){
	router.listen(8080);
});

function urldecode(str) {
  return decodeURIComponent((str + '')
    .replace(/%(?![\da-f]{2})/gi, function() {
      return '%25';
    })
    .replace(/\+/g, '%20'));
}