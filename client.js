function data() {
    const data = {
        add: '',
        remove: '',
        bookCheck: '',
        notecheck: '',
        book: {
            title: '',
            author: '',
            note: ''
        },
        note: {
            title: '',
            body: ''
        }
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
    const ftch = fetch('http://localhost:420/data', options).then(resp => resp.json()).then((txt) => {
        const fetchedData = (txt.title)
        var bookString = [];
        fetchedData.filter((book) => {bookString.push('<br>Title: ' + book.title + '<br>Author:' + book.author + '<br>Note:'+book.note+'<br><br>')})
        console.log(bookString)
        popupS.window({
            title: 'ALL YOUR BOOKS AND NOTES',
            appendLocation: document.body,
            mode: 'alert',
            content: bookString.toString()//here we got the response
        });


    })

}
function bookornote() {
    if (document.getElementById('note').checked && document.getElementById('book').checked) {
        document.getElementById('bookDIV').style.visibility = 'hidden';
        document.getElementById('noteDIV').style.visibility = 'hidden';
        document.getElementById('book').checked = false;
        document.getElementById('note').checked = false;
        popupS.alert({
            title: 'ALERT',
            appendLocation: document.body,
            content: 'Either a NOTE or a BOOK can be added.'
        });

    }
    else if (document.getElementById('book').checked) {
        document.getElementById('bookDIV').style.visibility = 'visible';
        document.getElementById('noteDIV').style.visibility = 'hidden';
    }
    else if (document.getElementById('note').checked) {
        document.getElementById('bookDIV').style.visibility = 'hidden';
        document.getElementById('noteDIV').style.visibility = 'visible';
    }

    else {
        document.getElementById('bookDIV').style.visibility = 'hidden';
        document.getElementById('noteDIV').style.visibility = 'hidden';
    }
}
function subb() {

    if (document.getElementById('add').checked != document.getElementById('remove').checked) {
        const data = {
            add: document.getElementById('add').checked,
            remove: document.getElementById('remove').checked,
            book: {
                title: document.getElementById('titleBook').value,
                author: document.getElementById('author').value,
                note: document.getElementById('bookNote').value
            }
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
        const ftch = fetch('http://localhost:420/api', options).then(resp => resp.json()).then((txt) => {
            var fetchedData = (txt.title)
            
            document.getElementById('prompt').innerHTML = fetchedData;//here we got the response

        })
    }
    else {
        popupS.alert({
            title: 'ALERT',
            appendLocation: document.body,
            content: 'Either ADD or REMOVE. <br>Both operations cannot be done at once.'
        });
    }
}
// const err32 = {
//             add: false,
//             remove: false,
//             bookCheck: false,
//             noteCheck: false,
//             book: {
//                 title: '' ,
//                 author: ''
//             },
//             note: {
//                 title: '' ,
//                 body: ''
//             }
//         }
// // function live(){
//     if(document.getElementById('live').value == 'add'){
//      err32.add = true, err32.remove = false;
//     }
//     if(document.getElementById('live').value == 'remove'){
//      err32.add = false, err32.remove = true;
//     }

//     console.log(err32)
// }

