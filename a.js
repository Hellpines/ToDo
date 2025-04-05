const input = document.querySelector('input')
const btn = document.querySelector('button')
const div = document.querySelector('div')
async function show() {
    const package = await fetch('https://dummyjson.com/todos', {
        method: 'GET'
    })
    const result = await package.json();
    const arr = result.todos;
    document.querySelector('body').appendChild(div)
    for (let i = 0; i < arr.length; i++) {
        const p = document.createElement('p');
        p.textContent = arr[i].todo
        div.appendChild(p)
    }
}
show()
btn.addEventListener('click', async () => {
    const package = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: `${input.value}`,
            completed: false,
            userId: 5,
        })
    })
    const res = await package.json();
    const p = document.createElement('p')
    p.textContent = res.todo
    div.appendChild(p)
})