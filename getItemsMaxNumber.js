const items = [
    {name: 'item 6'},
    {name: 'item 10'},
    {name: 'item 1'},
    {name: 'item 12'},
    {name: 'item 14'}
];

const getItemsMaxNumber = (items) => {
    if (!items) throw new Error('Items is null'); //check if object "items" is not null

    let max = 0;
    for (const item of items) {
        if (item.hasOwnProperty('name')) {
            if (checkIfStringContainNumber(item.name)) {
                const number = parseInt(item.name.split(' ')[1]);
                if (max < number) {
                    max = number;
                }
            }
        }
    }

    return max;
};

const checkIfStringContainNumber = (string) => {
    const regex = new RegExp(/\d+/g);
    return string.match(regex);
};

console.log('Example: ');
console.log("items: " + JSON.stringify(items, null, 2));
console.log("Max value: " + getItemsMaxNumber(items));

export default getItemsMaxNumber;