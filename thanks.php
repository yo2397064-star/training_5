<?php
   include('header.php');
?>

<?php
// confirm.php から送られてきた最終データを受け取る
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // (1) ここにメール送信処理（mail()関数など）を記述します
    // (2) データベースに保存する処理を記述します
    
    // データは処理したので、$_POSTは使わずにサンクスページに遷移します
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
