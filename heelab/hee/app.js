var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cron = require("node-cron");
const axios = require('axios');
const cheerio = require('cheerio');

const iconv = require('iconv-lite');
const fs = require('fs');
const e = require('express');

var app = express();

const getHtml = async () => {
  try {
    return await axios.get("http://cafe.hanbat.ac.kr/cafe/19961001/htmlview.php?menulink=/cafe/19961001/profile.html", 
      { responseType: 'arraybuffer', });
  } catch (error) {
    console.error(error);
  }
};

cron.schedule("*/5 * * * * *", function () {
  var info = null;
  var check = false;
  // var repeat = false;
  var outer = [];
  var inner = [];
  var spec = "";
  var conference = "";
  var greetings = "";
  var next = false;

  const specs_path = "./specs.txt";
  const conferences_path = "./conferences.txt";
  const greetings_path = "./greetings.txt";

    getHtml()
      .then(html => {  
        var charset = null;
        
        try {
          const contentType = html.headers['Content-type'];
      
          charset = contentType.includes('charset=')
          ? contentType.split('charset=')[1]
          : 'euc-kr';
        } catch(error) {
          charset = 'euc-kr';
        }

        const content = iconv.decode(html.data, charset);
        const $ = cheerio.load(content);
        const $tdbody = $("td p");

        $tdbody.each((idx, el) => {
          info = $(el).prev().text().split('\n');
        })

        // console.log(info.split(/[^\S\r\n]{2,}/));

        // console.log(info);

        info.forEach(function(data) {
          if(check == false && (data.match(/[^\S\r\n]{2,}/) || data.match(/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm))) {
            if(inner.length != 0) {
              outer.push(inner);
              inner = []
            }
      
            check = true;
          }

          if(!(data.match(/((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/gm))) {
            if(check == true) {
              inner.push(data);
              check = false;
            } else {
              inner.push(data);
            }
          }
        })
        
        // fs.writeFile('./test.txt', )
        var specs = outer[2][0].split(/(\s+\(*\D+[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3|A-Za-z|·]+\s*\)*)/g);

        check = false;

        try {
          if (fs.existsSync(specs_path)) {
            fs.unlink(specs_path, err => {
              if (err) throw err;
            });
          }
        } catch(err) {
          console.error(err)
        }

        specs.forEach(function(data) {
          if(check == false) {
            if(!(data.includes('.'))) {
                // repeat = true;
                spec += data;
                check = true;
              // if(repeat == true) {
              //   repeat = false;
              //   spec += data;

              //   console.log(specs);

              //   spec = "";
              // } else {
              //    HERE, THE ABOVE CODES WAS.  
              // }
            } else {
              if(next == true) {
                // console.log(spec);
                spec += '\n';

                fs.appendFileSync(specs_path, spec, function (err) {
                    if (err) throw err;
                });

                spec = "";
                next = false;
              }

              // if(repeat == true) {
              //   spec = "";
              //   repeat = false;
              // }

              spec += data;
              check = true;
            }
          } else {
            spec += ' ' + (data.trim());
            check = false;
            next = true; 
          }
        });

          var conferences = outer[3][1].split(/(\s*[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3|A-Za-z|·]*\s+[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3|A-Za-z|·]+)/g);

          check = false; next = false; 

          try {
            if (fs.existsSync(conferences_path)) {
              fs.unlink(conferences_path, err => {
                if (err) throw err;
              });
            }
          } catch(err) {
            console.error(err)
          }

          conferences = conferences.filter(item => item);

          console.log(conferences);

          conferences.forEach(function(data) {
              if(check == false) {
                if(next == true) {
                  conference = conference.trim();
                  conference += '\n';

                  console.log(conference);

                  fs.appendFileSync(conferences_path, conference, function (err) {
                    if (err) throw err;
                  });

                  conference = "";
                  next = false;
                } 

                conference += data;
                check = true; 
              } else {
                if(!(data.includes('.'))) {
                  conference += data;
                  check = true;
                } else {
                  conference += data;
                  check = false;
                  next = true;
                }
              }
          });

          try {
            if (fs.existsSync(greetings_path)) {
              fs.unlink(greetings_path, err => {
                if (err) throw err;
              });
            }
          } catch(err) {
            console.error(err)
          }

          outer[0].forEach(function(data) {
            greetings += (data + '\n');
          })

          fs.appendFileSync(greetings_path, greetings, function (err) {
            if (err) throw err;
          });

          // console.log(outer[0][0]);
      })
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
