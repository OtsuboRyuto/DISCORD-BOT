<template>
   <div>
$init (ターゲット) (オプション)<br>
「$init」は「$init -cal」と「$init -server」の2種類あります。<br>
「$init -cal」はテキストチャンネルで計算ができるよう、チャンネルを登録と初期化を行うコマンドです。<br>
「$init -cal -all」とするとすべてのチャンネルが登録され保存されている値も0になります。<br>
「$init -server」はサーバーの初期設定を自動で行うコマンドで、セキュリティ機能を使いたい場合は「$init -server -hide」を行うと、すべてのチャンネルが消去され専用の設定になります。<br>
「$init -server -make」を行うと、チャンネルがすべて削除されたのち、カテゴリーごとにまとめた数字のチャンネルが20種類生成されます。<br>
「$init -server」系のコマンドはDiscordサーバへの負荷が重いため時々バグります。バグったときはテキストチャンネルを作成しもう一度実行してください。
<p />
<video autoplay controls muted loop src = "./videos/init.mp4"></video>
   </div>
  </template>

<script>
</script>

<style>
</style>