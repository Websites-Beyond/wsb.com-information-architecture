// Shared header + footer for the wireframe. Inject into any page with:
//   <div data-include="header"></div> ... <div data-include="footer"></div>
//   <script src="partials.js" type="module"></script>
// Single source of truth so nav edits happen once.

const HEADER = `
<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div class="flex lg:flex-1">
      <a href="index.html" class="-m-1.5 p-1.5 font-semibold tracking-tight text-lg">Websites&nbsp;Beyond</a>
    </div>
    <div class="flex lg:hidden">
      <button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Open main menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </button>
    </div>
    <el-popover-group class="hidden lg:flex lg:gap-x-10 items-center">
      <a href="mission.html" class="text-sm/6 font-semibold text-gray-900">Mission</a>
      <a href="solutions.html" class="text-sm/6 font-semibold text-gray-900">Services</a>
      <a href="impact.html" class="text-sm/6 font-semibold text-gray-900">Projects</a>
      <a href="partners.html" class="text-sm/6 font-semibold text-gray-900">Partners</a>
      <a href="resources.html" class="text-sm/6 font-semibold text-gray-900">Resources</a>
    </el-popover-group>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
      <a href="client-portal.html" class="text-sm/6 font-semibold text-gray-900">Client&nbsp;Portal</a>
      <a href="connect.html" class="rounded-md bg-gray-900 px-3.5 py-2 text-sm font-semibold text-white hover:bg-gray-700">Schedule&nbsp;Discovery&nbsp;Call</a>
    </div>
  </nav>
  <el-dialog>
    <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
      <div tabindex="0" class="fixed inset-0 focus:outline-none">
        <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="index.html" class="font-semibold">Websites Beyond</a>
            <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-700"><span class="sr-only">Close menu</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-6"><path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
          </div>
          <div class="mt-6 -my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6 text-base/7 font-semibold">
              <a href="mission.html" class="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50">Mission</a>
              <a href="solutions.html" class="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50">Services</a>
              <a href="impact.html" class="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50">Projects</a>
              <a href="partners.html" class="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50">Partners</a>
              <a href="resources.html" class="-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-50">Resources</a>
            </div>
            <div class="py-6 space-y-2">
              <a href="client-portal.html" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-50">Client Portal</a>
              <a href="connect.html" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-gray-50">Schedule Discovery Call</a>
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</header>`;

const FOOTER = `
<footer class="border-t border-gray-200">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-8 text-sm text-gray-600">
    <div><p class="font-semibold text-gray-900">Websites Beyond</p><p class="mt-2 text-gray-500">Fuel your mission.</p></div>
    <div><p class="font-semibold text-gray-900">What we do</p><ul class="mt-3 space-y-2">
      <li><a href="web-applications.html" class="hover:text-gray-900">Websites</a></li>
      <li><a href="web-applications.html" class="hover:text-gray-900">Web Applications</a></li>
      <li><a href="solutions.html" class="hover:text-gray-900">Mission Control</a></li>
    </ul></div>
    <div><p class="font-semibold text-gray-900">Company</p><ul class="mt-3 space-y-2">
      <li><a href="mission.html" class="hover:text-gray-900">Mission</a></li>
      <li><a href="impact.html" class="hover:text-gray-900">Impact</a></li>
      <li><a href="agencies.html" class="hover:text-gray-900">For Digital Agencies</a></li>
      <li><a href="businesses.html" class="hover:text-gray-900">For Local-Service Businesses</a></li>
      <li><a href="resources.html" class="hover:text-gray-900">Resources</a></li>
    </ul></div>
    <div><p class="font-semibold text-gray-900">Get started</p><ul class="mt-3 space-y-2">
      <li><a href="connect.html" class="hover:text-gray-900">Connect</a></li>
      <li><a href="client-portal.html" class="hover:text-gray-900">Client Portal</a></li>
      <li><a href="#" class="hover:text-gray-900">portablewebsites.com</a></li>
    </ul></div>
  </div>
</footer>`;

document.querySelectorAll('[data-include="header"]').forEach(el => { el.outerHTML = HEADER; });
document.querySelectorAll('[data-include="footer"]').forEach(el => { el.outerHTML = FOOTER; });
