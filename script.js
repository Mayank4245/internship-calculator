let string = "";
let string1 = '';
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'C') {
            string = '';
            document.getElementById('sec_input').value = string;
            string1 = '';
        } else if (e.target.innerHTML === '←') {
            string = string.slice(0, -1);
            string1 = string1.slice(0, -1);
            document.getElementById('sec_input').value = string;
        } else if (e.target.innerHTML === '=') {
            try {
                let string2 = eval(string1);
                document.getElementById('sec_input').value = string2;
            } catch (error) {
                document.getElementById('sec_input').value = 'Error';
            }
            string = '';
            string1 = '';
        } else {
            string += e.target.innerHTML;
            string1 += e.target.innerHTML;
            document.getElementById('sec_input').value = string;
        }
    });
});

