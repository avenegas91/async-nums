let favoriteNumber = 11;
let baseURL = "http://numbersapi.com";

// part 1
async function part1() {
    let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
    console.log(data);
}
part1();

// part 2
const favoriteNumbers = [11, 21, 25];
async function part2() {
    let data = await $.getJSON(`${baseURL}/${favoriteNumbers}?json`);
    console.log(data);
}
part2();

//part 3
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favoriteNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
part3();