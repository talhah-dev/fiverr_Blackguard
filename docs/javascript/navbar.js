const dynamic_navbar = document.getElementById("navbar");

dynamic_navbar.innerHTML = `
    <nav class="fixed navbar md:top-6 top-4 px-4 left-0 w-full z-40 transition-all duration-300">
        <div data-aos="fade-down"
            class="max-w-7xl mx-auto glass rounded-2xl flex justify-between items-center w-full md:p-5 p-3 md:h-28 h-20">
            <a href="/index.html" class="flex items-center justify-center lg:justify-start">
                <img src="/docs/assets/images/logo.png" class="md:h-20 h-16 brightness-0" alt="logo">
            </a>
            <div class="md:flex hidden items-center gap-10">
                <div class="md:flex items-center gap-10 hidden">
                    <ul class="md:flex hidden items-center text-zinc-800 font-medium uppercase gap-10">
                        <li><a href="/index.html" class="hover:text-opacity-80 transition-all duration-500">Home </a>
                        </li>
                        <li><a href="/scope.html" class="hover:text-opacity-80 transition-all duration-500">Scope</a>
                        </li>
                        <li><a href="/approach.html" class="hover:text-opacity-80 transition-all duration-500">Approach</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="md:flex items-center justify-center gap-4 hidden">
                <div class="flex items-center justify-center gap-2 relative">
                    <div id="language" class="cursor-pointer flex items-center gap-1">
                        <img src="/docs/assets/images/global.svg" class="opacity-80 h-6" alt="">
                        <span class="font-medium uppercase">EN</span>
                    </div>

                    <div id="langDropdown" class="absolute fadeIn top-14 w-20 -left-2 glass p-3 rounded-xl shadow-md hidden">
                        <ul class="space-y-3">
<li class="cursor-pointer hover:opacity-60 transition-all duration-500"><a href="/docs/languages/de/index.html"
        class="block w-full">BG</a></li>
<li class="cursor-pointer hover:opacity-60 transition-all duration-500"><a href="/index.html"
        class="block w-full">EN</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <i class="fa-solid mobileMenuBtn text-zinc-800 fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 glass max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-zinc-700 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 text-zinc-800 font-medium uppercase flex-col gap-7">
              <li><a href="/index.html" class="hover:text-opacity-80 transition-all duration-500">Home </a>
                        </li>
                        <li><a href="/scope.html" class="hover:text-opacity-80 transition-all duration-500">Scope</a>
                        </li>
                        <li><a href="/approach.html" class="hover:text-opacity-80 transition-all duration-500">Approach</a>
                        </li>
            </ul>
            <ul
                class="grid grid-cols-2 relative z-50 text-zinc-800 font-medium uppercase w-full text-center mt-5 gap-3">
                <li><a href="/index.html"
                        class="hover:text-opacity-80 overflow-hidden transition-all duration-500 border rounded-lg w-full block py-1">EN
                    </a>
                </li>
                <li><a href="/docs/languages/de/index.html"
                        class="hover:text-opacity-80 overflow-hidden transition-all duration-500 border rounded-lg w-full block py-1">DE</a>
                </li>
            </ul>
            <a href="/careers.html"
                class=" block text-nowrap transition-all duration-500 hover:opacity-80 px-6 py-3 uppercase rounded-lg text-white bg-[#183385] text-center mt-3">Careers</a>
        </div>
    </div>
`


const mobileMenuBtn = document.querySelectorAll(".mobileMenuBtn");
const navbar = document.querySelector(".navbar");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        navbar.style.transform = `translateY(-9rem)`;
    } else {
        // Scrolling up
        navbar.style.transform = `translateY(0%)`;
    }
    prevScrollPos = currentScrollPos;
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});

mobileMenuBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "100%";
    });
});

const languageToggle = document.getElementById('language');
const dropdown = document.getElementById('langDropdown');

languageToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent event from bubbling to body
    dropdown.classList.toggle('hidden');
});

// Hide dropdown if clicked outside
document.body.addEventListener('click', () => {
    dropdown.classList.add('hidden');
});

// Optional: Stop propagation if clicking inside dropdown
dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});