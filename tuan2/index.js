
var ruong = [
    {
        type: ' ruong thuong ',
        amount: 2
    },
    {
        type: ' ruong cao cap ',
        amount: 5
    },
    {
        type: ' ruong sieu cap ',
        amount: 10
    }
]

for (var input = 0; input < 3; input++) {
    var typeofruong = ruong[input].type
    var amountofruong = ruong[input].amount
    console.log(' toi co ' + amountofruong + typeofruong)
}