
const someFood = ['banana', 'apple', 'orange'];
if(someFood.indexOf('banana')) {
    console.log('i have to buy some banana');
} else {
    console.log('no need');
} // ne need
// why? -> indexOf返回的下标 0， 0是false
// person.pet?.name ?为询问是否有这个元素

const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨') // 不会改变原数组
emojis.filter(x => x !== '🥑') // 不会改变原数组
emojis.find(x => x !== '🥑') // 不会改变原数组
emojis.reduce((acc, cur) => acc + '✨') // 不会改变原数组
emojis.slice(1, 2, '✨') // 不会改变原数组
emojis.splice(1, 2, '✨') // 会改变原数组

const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
  }
  const colors = ["pink", "red", "blue"]
//   console.log(colorConfig.colors[1]) // TypeError: Cannot read property '1' of undefined
//   在JavaScript中，我们有两种访问对象属性的方法：
// 括号表示法或点表示法。在此示例中，我们使用点表示法（colorConfig.colors）
// 代替括号表示法（colorConfig [“ colors”]）。
// 因为colorConfig.colors ---> undefined 访问1的时候 我们无法对未定义的值执行此操作，因此会抛出Cannot read property '1' of undefined

const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three) // {} "" []
// 条件判断时除了false全部转换为真值。false有 false, 0、-0, '', undefined, null, NaN, document.all
//  [] = true   '' = false

const getList = ([x, ...y]) => [x, y]
const getUser = user => ({ name: user.name, age: user.age })

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))

function nums(a, b) {
    if
    (a > b)
    console.log('a is bigger')
    else 
    console.log('b is bigger')
    return 
    a + b
  }
  
  console.log(nums(4, 2))
  console.log(nums(1, 2))
  // 'a is bigger' undefined 'b' is bigger undefined  --> return 不能换行，不然return undefined

  function givelydiaPizza() {
     return 'Here is pizza'
  }
  const givelydiaChocolate = () => 'Here is chololate... now go hit the gym already';
  console.log(givelydiaPizza.prototype) // { constructor: ...} 普通函数的prototype是一个原型对象，包含constructor 属性
  console.log(givelydiaChocolate.prototype) // undefined 箭头函数没有this，没有prototype不能被new字符实例化

//   const numList = [1,2,3].push(4);
//   console.log(numList.push(5)) // error 因为numList的结果是4，[].push() --> 返回的是数组长度

// 手写一个数组去重方法
const obj = {}
const arr = ['lydia', 'pink', 'pink', 'ok', 'name'];
for(let i =0, len = arr.length; i<len; i++) {
    const item = arr[i];
    if(obj[item] !== undefined) {
        arr.splice(i,1);
        i--; // 解决删除元素后，数组塌陷问题
        continue;
    }
    obj[item] = item;
}
// console.log(arr, 'arr');

//不改变原数组的情况下重新，补充新的元素

const insert = (arr, index, newItem) => {
    return [
        ...arr.slice(0,index), //先取出要补充元素的前面元素
        newItem, // 新补充的元素
        ...arr.slice(index)
    ]
}
console.log(insert(['w', 'i', 'l', 'l'], 1 , 'o'));