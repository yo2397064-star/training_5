<?php
   include('header.php');
?>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    

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
