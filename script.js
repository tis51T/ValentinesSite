function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/run.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
      "Bấm 'Có' đi bạn ưi, bấm 'Không' nó chạy á :>";
    document.getElementById("name").style.display = "none";

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

  if (response === "Yes") { 
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Gửi bồ dấu yêu, mới đó mà đã được hai lần Valentine rùi nhỉ! Bồ biết hông, tui cực kỳ cực kỳ quý bồ, dù có chuyện gì tui cũng không chịu buông đâu. Tui mong muốn đồng hành với bồ dài dài, ít thì cuối đời mà nhiều thì qua đời. Nếu trong cuộc hành trình này tui có sai phạm gì, mong bồ nhắc nhở và tha lỗi cho tui. Tui sẽ luôn cố gắng thay đổi để phù hợp với bồ! \n Yêu bồ nhiều lắm luônnnnnnnnnnnnnnnnnnnnnnnnnnnn";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}
