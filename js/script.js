// =========================
// CONTACT MODAL
// =========================

const modal = document.getElementById("contactModal");

const btn = document.getElementById("contactBtn");

const closeBtn = document.querySelector(".close");

btn.onclick = function(){

    modal.style.display = "flex";

}

closeBtn.onclick = function(){

    modal.style.display = "none";

}

window.onclick = function(event){

    if(event.target == modal){

        modal.style.display = "none";

    }

}

// =========================
// SCROLL ANIMATION
// =========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>observer.observe(el));

// =========================
// CERTIFICATE MODAL
// =========================

const certificateModal = document.getElementById("certificateModal");
const certificateImage = document.getElementById("certificateImage");
const certificateTitle = document.getElementById("certificateTitle");
const closeCertificateModal =
    document.getElementById("closeCertificateModal");

const certificateButtons =
    document.querySelectorAll(".view-certificate-btn");

certificateButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const imagePath = button.dataset.image;
        const title = button.dataset.title;

        certificateImage.src = imagePath;
        certificateImage.alt = `${title} certificate`;
        certificateTitle.textContent = title;

        certificateModal.style.display = "flex";
        document.body.style.overflow = "hidden";

    });

});

function hideCertificateModal() {

    certificateModal.style.display = "none";
    document.body.style.overflow = "";

    certificateImage.src = "";
    certificateTitle.textContent = "";

}

closeCertificateModal.addEventListener(
    "click",
    hideCertificateModal
);

certificateModal.addEventListener("click", (event) => {

    if (event.target === certificateModal) {

        hideCertificateModal();

    }

});

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        certificateModal.style.display === "flex"
    ) {

        hideCertificateModal();

    }

});