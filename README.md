# Emic 2 Web Interface

This is my first attent to create a Tessel module utilizing simple components from Radio Shack and Sparkfun. 

### Components used

- [Tessel](https://tessel.io/docs/home)
- [Emic 2](https://www.sparkfun.com/products/11711) 
- [Thin Speaker](https://www.sparkfun.com/products/10722)
- [DUAL MINI BOARD WITH 213 HOLES](http://www.radioshack.com/dual-mini-board-with-213-holes/2760148.html#.VIERyjHF8qw)
- [SPDT Slide Switch](https://www.sparkfun.com/products/9609)

### Software

- [tiny-router](https://www.npmjs.org/package/tiny-router)
- [emic2](https://www.npmjs.org/package/emic2)

### Wiring

![Tessel emic2](http://goo.gl/fulsZS "Tessel emic2")

### Assembly

![Assembly 1](https://lh5.googleusercontent.com/-hstN9Lk1LDk/VIH-K6u4vYI/AAAAAAAAKhQ/qOIC7g4QB58/w640-h360-no/emic2-1.jpg "Tessel emic 2")

![Assembly 2](https://lh6.googleusercontent.com/-CZaQ8bG39nc/VIH-K2F-toI/AAAAAAAAKhI/Di-VyLXhSn4/w406-h480-no/emic2-2.jpg "Tessel emic 2")

![Assembly 3](https://lh6.googleusercontent.com/-t0h9OzZo5Z4/VIH-LHFV5JI/AAAAAAAAKhM/8G2sgizvSnM/w545-h480-no/emic2-3.jpg "Tessel emic 2")

![Assembly 4](https://lh5.googleusercontent.com/-NCmuxHqGp6Y/VIH-MdAYq_I/AAAAAAAAKhc/CW1qb4o3ksw/w533-h480-no/emic2-4.jpg "Tessel emic 2")

![Assembly 5](https://lh6.googleusercontent.com/-V4pD9lmk4Oc/VIH-LZfSqgI/AAAAAAAAKhU/pq9bc6LgQ4w/w640-h451-no/emic2-tessel.jpg "Tessel emic 2")

### Web Interfance

![webinterface](https://lh3.googleusercontent.com/-lw-njy9FfIk/VIH_Pun0IBI/AAAAAAAAKiE/MZh9Xi6kpq4/w506-h355/Emic%2B2%2BWeb%2BInterfacxe.png "Tessel emic 2")

### Install & run
```bash
    git clone https://github.com/pirumpi/emic2-interface.git
    npm install //Install dependencies 
    node app.js //run app
```
### Code Preview
```js
    var tessel = require('tessel');
    var router = require('tiny-router');
    var emic2 = require('emic2').use(tessel.port['D']);
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
        .........
```
### Comments
The module is actually too big, so I can't connect other modules if this one is connected. I would really like to get my hands on a Tessel prototype board so I can get the right mesurements. Overall, it was a fun and simple projects for the holidays.
