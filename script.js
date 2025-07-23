function showWish() {
  // 👉 Phát nhạc khi nhấn nút, có kiểm tra lỗi
  const music = document.getElementById("bgmusic");
  if (music) {
    music.play().catch((err) => {
      console.log("Trình duyệt chặn phát nhạc:", err);
    });
  }

  const msg = document.getElementById("message");
  const text = `À nhon xê ô, chắc là bà sẽ bất ngờ về cái này lắm á ha, hôm nay đã là ngày 26 tháng 07 năm 2025-sinh nhật tuổi 18 của Liang Hải Yến. Tui chúc bà tuổi mới luôn vui vẻ, sống hạnh phúc và cố gắng đạt được những điều mà bản thân mong muốn trong tương lai nhe. Tui nghĩ đây là dịp để tui gửi tới bà những lời chúc tốt đẹp và cũng là lúc tui muốn chia sẻ một vài điều trong lòng của tui suốt khoảng thời gian gắn bó cùng bà vừa qua. Có lẽ bản thân tui đã có nhiều lần thực sự rất ích kỉ và bị khó chịu khi bà có "những người bạn mới", có nhiều lúc tui cảm giác là hình như "những người bạn mới" đó đang dần làm mờ nhạt đi hình ảnh của tui trong bà. Người ta đang dần "thay thế" tui làm mọi thứ cùng bà mà đó toàn là những điều mà "tụi mình" đã từng nói, đã từng mong muốn làm cùng nhau. Tui thấy được rằng khi "tụi mình" bước vào 2 môi trường khác nhau, dường như chúng ta càng xa cách hơn, nói đúng là khoảng cách giữa "tụi mình" càng lớn và thực tế là "tụi mình" chẳng còn là "sự ưu tiên" của nhau nữa. Tại sao tui lại nói như vậy hả, tại vì dù "tụi mình" có ở cách nhau chỉ vài trăm mét đi qua đi lại chưa đầy 5p nhưng "tụi mình" luôn bận với nhau, "tụi mình" sẵn sàng dành thời gian rảnh cho "những người bạn mới" đó nhưng lại luôn né tránh và bận rộn với "tụi mình". Tui biết chứ, ai cũng sẽ có "những người bạn mới" nhưng sao tui không thấy thoải mái gì hết, hôm bà làm lễ tốt nghiệp tui lại còn chẳng được bà nhắn cho 1 câu nào. Bà có thể nói tui sao nhỏ nhen có một việc mà cứ nhắc đi nhắc lại quài nhưng làm sao bà biết được tui đã đợi cái ngày đó và chuẩn bị hoa với quà cho bà để mọi người thấy được bà là người hạnh phúc nhất ngày hôm đó chứ. Lúc thấy bà đăng những tấm ảnh cùng "những người bạn mới" đó tui thực sự đã rất bực bội, bực đến mức tui đã tháo món quà sinh nhật bà tặng ra và có ý định quăng nó đi. Rồi đến lễ tốt nghiệp của tui, bà cũng ko có mặt, hôm đó tui là người buồn nhất thì phải, người mà tui luôn tự hào kể cho mọi người là tui trân trọng nhất, người mà tui coi duy nhất là bạn thân lại không có mặt trong buổi lễ quan trọng của tui. Chả lẽ "tụi mình" chỉ đang mang cái tiếng "bạn thân" chứ chẳng là gì của nhau à, sao mọi thứ càng ngày càng cảm thấy khó gần thế. Ngay cả việc bà có thể thoải mái diện đồ đẹp trước mặt "những người bạn mới" mà khi bên cạnh tui bà còn ko thể làm được chuyện đó, hay trong bà tui đã trở nên xa lạ rồi nhỉ. Thực sự không biết đã bao nhiêu lần rồi tui phải tự an ủi chính mình là "mình cũng vậy, mình cũng có bạn mới mà, tại sao phải khó chịu khi người ta thì cảm thấy vui lúc mình có bạn mới chứ". Mà thôi cũng qua hết rồi với là ngày sinh nhật đặc biệt thì chỉ nên đọc chứ đừng suy nghĩ nhiều làm gì nha. Chúc cho bà sẽ luôn rực rỡ như ánh sao, kiên cường mạnh mẽ như cây xương rồng. Cố gắng học vì mẹ của bà nha. Mong năm sau vẫn tiếp tục đón sinh nhật cùng bà, nhưng ở Phan Thiết nhé hihihihihi. Best wishes for u, love u.`; // toàn bộ lời chúc
  msg.classList.remove("hidden");
  let i = 0;
  msg.innerHTML = "";
  const interval = setInterval(() => {
    if (i < text.length) {
      msg.innerHTML += text[i++];
    } else {
      clearInterval(interval);
    }
  }, 25);
}
