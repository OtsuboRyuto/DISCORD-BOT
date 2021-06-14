<template>
   <div>
   個人でカスタムマッチを開こうと考えたときに、難点の一つとしてあげられる得点計算ですが、以下の流れで簡単に行うことが出来ます。<br>
   <ol>
   	<li>「$init -cal -all」を使いテキストチャンネルの登録と初期化を行います。</li>
   	<li>ユーザーに「!add」や「!sub」といったテキストチャンネルごとに保存されている値を得点通りになるように入力してもらいます。</li>
   	<li>「$show -cal -all -sort」というコマンドを使用して、テキストチャンネル全体の得点ランキング順に出力します。</li>
   	<li>これで完了です。より正確性が必要な時はユーザーから証明となる物を提出してもらい、それとの整合性を確認するといった手段もあります。</li>
   </ol>
   <video autoplay controls muted loop src = "./videos/descrive1.mp4"></video>
   </div>
  </template>

<script>
</script>

<style>
</style>