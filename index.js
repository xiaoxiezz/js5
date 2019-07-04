// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();//讲name转换为大写
console.log(name);//输出

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var words = sentence.split(' ');
var i;
for(i = 0; i < words.length; i ++){
     words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
}
var sentence1 = words.join(' ');
console.log(sentence1);



// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
var num = money.substring(1);
console.log(num);