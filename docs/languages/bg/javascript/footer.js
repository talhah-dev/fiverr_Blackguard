const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-zinc-900 px-5 ">
        <div data-aos="fade-up"
            class="flex md:items-center items-start max-w-7xl w-full mx-auto md:pt-32 pt-20 pb-10 border-b border-zinc-400 justify-start md:justify-between gap-5 md:flex-row flex-col">
            <div class=""></div>
            <div class="flex md:items-center md:justify-center mt-5 md:mt-0 md:gap-16 gap-5 md:flex-row flex-col">
                <div class="">
                    <h2 class="text-white uppercase font-medium text-xl">Kontakt</h2>
                    <a href="mailto:info@dgrgroup.net"
                        class="hover:underline text-zinc-200 mt-1 block text-lg">info@dgrgroup.net</a>
                </div>
                <div class="">
                    <h2 class="text-white uppercase font-medium text-xl">Presse- und Öffentlichkeitsarbeit</h2>
                    <a href="mailto:info@dgrgroup.net"
                        class="hover:underline text-zinc-200 mt-1 block text-lg">info@dgrgroup.net</a>
                </div>
            </div>
        </div>
        <div class="flex items-center max-w-7xl w-full mx-auto py-8 justify-between gap-5 md:flex-row flex-col">
            <p class="text-zinc-200">Copyright © <span id="copyright"></span> DGR Consult Invest GmbH Alle Rechte vorbehalten</p>
            <div class="flex flex-wrap items-center gap-5">
                <a href="/docs/languages/de/privacy-policy.html" class="hover:underline text-zinc-200 block ">Datenschutzrichtlinie</a>
                <a href="/docs/languages/de/imprint.html" class="hover:underline text-zinc-200 block ">Impressum</a>
                <a href="/docs/languages/de/careers.html" class="hover:underline text-zinc-200 block ">Karriere</a>
                <a href="https://www.linkedin.com/company/dgr-consult-invest/" class="hover:underline text-zinc-200 block "><i class="fa-brands text-xl fa-linkedin"></i></a>

            </div>
        </div>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year