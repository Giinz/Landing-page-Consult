const modal = document.getElementById("myModal");
const btnLeft = document.querySelector(".btn.left");
const btnRight = document.querySelector(".btn.right");
const imageSources = document.querySelectorAll(".Portfolio__image div img");
const imageData = [];
const imageButtons = document.querySelectorAll(".gallery__button a");
const modalImg = document.getElementById("img01");
imageButtons.forEach((img) => {
  img.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "flex";
    modalImg.src = this.href;
    modalImg.setAttribute("alt", this.getAttribute("alt"));
    document.body.style.top = `-${window.pageYOffset}px`;
    document.body.style.position = "fixed";
    btnLeft.addEventListener("click", function (e) {
      e.stopPropagation();
      const id = modalImg.getAttribute("alt");
      previousImage(id);
    });
    btnRight.addEventListener("click", function (e) {
      const id = modalImg.getAttribute("alt");
      nextImage(id);
      e.stopPropagation();
    });
    modalImg.addEventListener("click", function (e) {
      const id = modalImg.getAttribute("alt");
      e.stopPropagation();

      previousImage(id);
    });
  };
});

modal.onclick = closeModal;

const span = document.querySelector(".close");
span.onclick = closeModal;

function closeModal(e) {
  // e.preventDefault()
  modal.style.display = "none";
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
}
imageSources.forEach((img) => {
  const data = {
    src: img.src,
    alt: img.getAttribute("alt"),
  };
  imageData.push(data);
});
function previousImage(id) {
  const prevImageData = imageData.filter((item) => {
    if (id == 1) {
      return item.alt == 6;
    } else {
      return item.alt == id - 1;
    }
  });
  modalImg.src = prevImageData[0].src;
  modalImg.setAttribute("alt", prevImageData[0].alt);
}
function nextImage(id) {
  const prevImageData = imageData.filter((item) => {
    if (id == 6) {
      return item.alt == 1;
    } else {
      return item.alt == +id + 1;
    }
  });
  modalImg.src = prevImageData[0].src;
  modalImg.setAttribute("alt", prevImageData[0].alt);
}
