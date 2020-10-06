<?php
class HelloWorld {
	private string $message;

	public function __construct(string $m)
	{
		$this->message = $m;
	}

	public function say(): void
	{
		echo $this->message;
	}
}

$hello = new HelloWorld('Hello World!');
$hello->say();
?>