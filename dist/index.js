const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};
const themeChack = () => {
    if(userTheme === 'dark' || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};
const themeswitch = ()=>{
    if(document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}
sunIcon.addEventListener("click", () => {
    themeswitch();
});
moonIcon.addEventListener("click", () =>{
    themeswitch();
});
themeChack();