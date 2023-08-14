function clearActiveClass(){
  const photos = document.querySelectorAll(".gallery__item");
  if (photos==undefined) return;
  photos.forEach(cur=>{
    cur.classList.remove("gallery__item_active");
  });
}
function makeActiveItem(){
  const blogContent = document.querySelector(".blog__container");
  const activeItem = blogContent.querySelector(".gallery__item_active");
  const author_avatar = activeItem.dataset.author;
  const author = blogContent.querySelector(".blog__author_avatar");
  if (author) author.src = author_avatar;
  const author_text = activeItem.dataset.text;
  const text_blog = blogContent.querySelector(".blog__text");
  if (text_blog) text_blog.textContent = author_text;

}

export function main(){
  makeActiveItem();
  const blogContent = document.querySelector(".blog__container");
  const photos = blogContent.querySelectorAll(".gallery__item");
  const avatarDiv = document.querySelector(".blog__author");
  const avatarLogo = avatarDiv.querySelector("img");
  const avatarLogoPic = avatarDiv.querySelector('[type]');
  let avatar_webp = '';

  if (photos==undefined) return;
  photos.forEach(cur=>{
    cur.addEventListener("click", (e)=>{
      const node = e.target.parentElement;
      clearActiveClass();
      node.classList.add("gallery__item_active");
 
      const author_avatar_link = node.dataset.author;
      if (avatarLogo) avatarLogo.src = author_avatar_link;
      if (avatarLogoPic) {
        avatar_webp = author_avatar_link.replace("jpg", "webp");
        avatar_webp = author_avatar_link.replace("png", "webp");
        avatarLogoPic.src=avatar_webp;
      }
      
      const author_text = node.dataset.text;
      const text_blog = blogContent.querySelector(".blog__text");
      if (text_blog) text_blog.textContent = author_text;
    });
  })
}