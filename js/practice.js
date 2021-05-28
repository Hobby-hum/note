
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