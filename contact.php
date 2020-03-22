
<meta charset="utf-8"> 
<?php
$urok="���� 22";
error_reporting( E_ERROR );   //���������� �������������� � �������� (warning � notice) �� �����
// �������� ���������� �� ����� �����		
if (isset($_POST['name1']))			{$name1			= $_POST['name1'];		if ($name1 == '')	{unset($name1);}}
if (isset($_POST['email1']))		{$email1		= $_POST['email1'];		if ($email1 == '')	{unset($email1);}}
if (isset($_POST['text']))			{$text			= $_POST['text'];		if ($text == '')	{unset($text);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}
//�������� ����������� ������ �� ����� �����
if (isset($name1) ) {
$name1=stripslashes($name1);
$name1=htmlspecialchars($name1);
}
if (isset($email1) ) {
$email1=stripslashes($email1);
$email1=htmlspecialchars($email1);
}
if (isset($text) ) {
$text=stripslashes($text);
$text=htmlspecialchars($text);
}
// ����� ����� ���� ������ ������
$address="slimnation2@gmail.com";
// ����� ������ 
$note_text="���� : $urok \r\n��� : $name1 \r\n Email : $email1 \r\n �������������� ���������� : $text";

if (isset($name1)  &&  isset ($sab) ) {
mail($address,$urok,$note_text,"Content-type:text/plain; windows-1251"); 
// ��������� ����� �������� �����
echo "<p style='color:#009900;'>text<b>$name1</b> djfnskdjfn. <br> sgfsd. <br>sdfgsdf <b> $email1</b>.</p>";
}

?>