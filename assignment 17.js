// pattern 


let star = [1, 2, 3, 4, 5];

for (let i = 0; i < star.length; i++) {
    let stars = "";
    for (let j = 1; j <= star[i]; j++) {
        stars += "*";
    }
    console.log(stars);
}
