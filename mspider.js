var spider = require('./spider');
var url = process.argv[2];
spider.getMtimeData(url,function(res){
    console.log(res)
})