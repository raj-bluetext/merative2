import { createTag } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const breadcrumbLinks = createTag('div', { class: 'breadcrumb-links' });
  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.parentElement.remove();
    const newLink = createTag('span', { class: 'breadcrumb-link' }, link);
    const linkUrl = new URL(link.href);
    if (linkUrl.pathname === window.location.pathname) newLink.classList.add('active');
    breadcrumbLinks.appendChild(newLink);
    newLink.innerHTML += ' > ';
  });
  block.prepend(breadcrumbLinks);
  const icon = block.querySelector('span.icon');
  icon.parentElement.parentElement.remove();
  block.append(icon);
}
