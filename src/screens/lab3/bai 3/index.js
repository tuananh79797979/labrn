const modal = document.querySelector("#modal-container");

// Bật modal
function showModal() {
  modal.style.display = "block";
}

// Tắt modal
function hideModal() {
  modal.style.display = "none";
}

// Sự kiện nhấn nút "Ẩn Modal"
const btnHideModal = document.querySelector(".modal-footer .btn-primary");
btnHideModal.addEventListener("click", hideModal);

// Sự kiện nhấn nút back trên điện thoại
window.addEventListener("backbutton", function () {
  // Hiển thị thông báo
  alert("Bạn đã tắt modal bằng nút back của thiết bị");

  // Tắt modal
  hideModal();
});
