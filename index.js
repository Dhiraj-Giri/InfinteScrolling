
const container = document.querySelector(".box");

const loadStudents = (students = 25) => {
    let i = 1;
    while (i <= students) {
        const title = document.createElement("p");
        title.innerHTML = `Scrolling!!!!! `+ i;
        container.appendChild(title);
        i++;
    }
};

loadStudents();
window.addEventListener("scroll", () => {
    if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
    ) {
        loadStudents();
    }
});


