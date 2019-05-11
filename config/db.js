const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/lmz';

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('数据连接成功')
  })
  .catch((err) => {
    console.log('数据连接失败', err.message);
  })

module.exports = mongoose;