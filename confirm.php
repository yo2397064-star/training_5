<?php
   include('header.php');
?>

<?php
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$seat = htmlspecialchars($_POST['seat'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$tel = htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8');

?>

<main>
    <div class="main_code">
        <h3>お問い合わせ内容確認</h3>

        <dl>
            <dt>お名前</dt>          <dd><?php echo $name; ?></dd>
            <dt>席の場所</dt>        <dd><?php echo $seat; ?></dd>
            <dt>メールアドレス</dt>  <dd><?php echo $email; ?></dd>
            <dt>電話番号</dt>        <dd><?php echo $tel; ?></dd>
        </dl>

        <form action="./thanks.php" method="post">
            <input type="hidden" name="name" value="<?php echo $name; ?>">
            <input type="hidden" name="seat" value="<?php echo $seat; ?>">
            <input type="hidden" name="email" value="<?php echo $email; ?>">
            <input type="hidden" name="tel" value="<?php echo $tel; ?>">
        
            <div class="button_area">
                <button class="button_back" type="button" onclick="history.back()">修正</button>
                <button class="button_go" type="submit">送信</button>
            </div>
        </form>
    </div>
</main>

<?php
    include('footer.php');
?>
