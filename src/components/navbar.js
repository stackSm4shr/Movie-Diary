export function Navbar() {
  return `
    <nav id="nav" class="bg-ct-mantle text-ct-text p-4 mb-6">
      <ul class="flex space-x-6">
        <li><a href="/" data-navigo>Homepage</a></li>
        <li><a href="/journal" data-navigo>Journal</a></li>
      </ul>
    </nav>
  `;
}
