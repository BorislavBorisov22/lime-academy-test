
function braces(lines) {
    const areBracesBalanced = (text) => {
        const openingBraces = ['(', '{', '['];
        const closingBraces = [')', '}', ']'];

        const openingBracesIndecesStack = [];

        for (let currentSymbol of text) {
            const openingBraceIndex = openingBraces.findIndex(b => b === currentSymbol);
            const closingBraceIndex = closingBraces.findIndex(b => b === currentSymbol);
            
            if (openingBraceIndex < 0 && closingBraceIndex < 0) {
                continue;
            }

            if (openingBraceIndex >= 0) {
                openingBracesIndecesStack.push(openingBraceIndex);
                continue;
            }

            if (openingBracesIndecesStack.length === 0) {
                return false;
            }

            const lastOpeningBraceIndex = openingBracesIndecesStack.pop();
            if (lastOpeningBraceIndex !== closingBraceIndex) {
                return false;
            }
        }

        return openingBracesIndecesStack.length === 0;
    };

    return lines.map(l => areBracesBalanced(l) ? 'YES' : 'NO');
}


// { ( ( [ ] ) [ ] ) [ ] } [ ]
// {(([])[])[]]}

const input = [
    '{(([])[])[]}',
    '{(([])[])[]]}',
    '{(([])[])[]}[]'
];

// expected YES, NO, YES
console.log(braces(input));