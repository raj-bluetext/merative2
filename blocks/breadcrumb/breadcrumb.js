import { createTag } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const breadcrumbLinks = createTag('div', { class: 'breadcrumb-links' });
  const links = block.querySelectorAll('a');
  links.forEach((link, i) => {
    link.parentElement.remove();
    const newLink = createTag('span', { class: 'breadcrumb-link' }, link);
    if (i === (links.length - 1)) newLink.classList.add('last');
    breadcrumbLinks.appendChild(newLink);
    newLink.innerHTML += ' > ';
  });
  block.prepend(breadcrumbLinks);
  const icon = block.querySelector('span.icon');
  icon.parentElement.parentElement.remove();
  block.append(icon);
}
