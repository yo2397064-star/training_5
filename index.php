<?php
   include('header.php');
?>

    <main>
        <div class="swiper" id="title">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="img/slide_1.jpg" alt="スライド1">
                </div>
                <div class="swiper-slide">
                    <img src="img/slide_2.jpg" alt="スライド2">
                </div>
                <div class="swiper-slide">
                    <img src="img/slide_3.jpg" alt="スライド3">
                </div>
                <div class="swiper-slide">
                    <img src="img/slide_1.jpg" alt="スライド1">
                </div>
                <div class="swiper-slide">
                    <img src="img/slide_2.jpg" alt="スライド2">
                </div>
                <div class="swiper-slide">
                    <img src="img/slide_3.jpg" alt="スライド3">
                </div>
            </div>

            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev">
                <img src="img/slide-btn-prev.svg" alt="前へ">
            </div>
            <div class="swiper-button-next">
                <img src="img/slide-btn-next.svg" alt="次へ">
            </div>
        </div>

        <div class="content">
            <h2>今年も始まる<span>夏祭り</span></h2>
        </div>

        <div>
            <p id="schedule">スケジュール</p>
        </div>
        <div class="scheduler">
            <div class="scheduler_content">
                <p class="first" data-description="9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容9月1日の内容">9月1日</p>
                <p class="second" data-description="9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容9月2日の内容">9月2日</p>
                <p class="third" data-description="9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容9月3日の内容">9月3日</p>
            </div>
            <div class="scheduler_description">
                <p class="explain"></p>
            </div>
        </div>

        <div class="access_map">
            <p id="access">アクセス</p>
            <p class="address">〒771-1154 徳島県徳島市応神町東貞方南川淵</p>
            <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6607.0670122499005!2d134.51810744408724!3d34.107089125949614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1758842669643!5m2!1sja!2sjp" 
                        width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
            </div>
        </div>

        <div class="reserve">
            <p id="reserve">席予約</p>

            <form id="reserve_form" method="post" action="./confirm.php">
                <div class=reserve_content>
                    <label for="name">お名前<span class="red">*必須</span></label>
                    <input type="text" name="name" class="required-field" placeholder="例）田中 太郎" required>
                </div>

                <div class=reserve_content>
                    <label for="seat">席の場所<span class="red">*必須</span></label>
                    <select name="seat" id="seatInput" class="required-field" required>
                        <option value="" hidden>選択してください</option>
                        <option value="SS席">SS席</option>
                        <option value="S席">S席</option>
                        <option value="A席">A席</option>
                        <option value="B席">B席</option>
                        <option value="C席">C席</option>
                    </select>
                </div>

                <div class=reserve_content>
                    <label for="email">メールアドレス<span class="red">*必須</span></label>
                    <input type="email" name="email" class="required-field" placeholder="例）abcd123@example.com" required>
                </div>

                <div class=reserve_content>
                    <label for="tel">電話番号<span class="black">*任意</span></label>
                    <input type="text" name="tel" id="tel" placeholder="例）09012345678">
                </div>

                <div class=reserve_content>
                    <button type="submit" id="submit-button" disabled>送信</button>
                </div>
                
            </form>




        </div>


    </main>
    
<?php
    include('footer.php');
?>
