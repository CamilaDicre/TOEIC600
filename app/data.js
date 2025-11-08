const units = {
    '1' : 'Banking',
    '2' : 'Shopping',
    '3' : 'Shipping',
    '4' : 'Accounting',
}

const words = {
    '1' : {
        'bill' : 'something to pay for',
        'account' : 'where you save your money',
        'save' : 'to not spent money'
    },
    '2' : {
        'pay' : 'give money',
        'cash' : 'physical money',
        'card' : 'credit card, debit card'
    },
    '3' : {
        'stock' : 'items to sell',
        'express' : 'fast, quick',
        'tax' : 'an extra amount to pay'
    },
    '4' : {
        'balance' : 'something to pay for',
        'credit' : 'where you save your money',
        'debit' : 'to not spent money'
    },
}

export { units, words }

// 'units' holds the description of each unit, while 'words' holds the vocabulary for each unit.