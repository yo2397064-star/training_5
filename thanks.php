<?php
   include('header.php');
?>

<?php

$message = "送信内容にエラーがありました。";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $seat = $_POST['seat'];
    $email = $_POST['email'];
    
    $message = "お問い合わせ内容を正常に受け付けました。";

}
?>

<main>
    <div class="main_thanks">
        <h4>お問い合わせありがとうございました</h4>
    </div>
</main>

<?php
    include('footer.php');
?>

