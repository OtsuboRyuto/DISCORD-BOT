<template>
  <div id="app" class = "d-flex flex-row">

    <div id="side" class = "col-sm-3 border-right bg-dark text-secondary">
      <!--リンクタグを生成します。-->
<div class = "node">
<router-link to="/" class =" topics" data-id = "SHINKBOTは？">▼Topぺージ</router-link><br>
      <router-link to="/page1" class ="syncer-acdn topics" data-target="syncer-acdn-02" data-id = "できること">▼できること</router-link><br>
<ul type = "none" id="syncer-acdn-02" class="syncer-acdn-child topics">
	<li><router-link to="/page1_page1" class ="syncer-acdn topics" data-target="syncer-acdn-01" data-id = "カスタムマッチをより身近に" >▼カスタムマッチをより身近に</router-link></li>
	<ul type = "none" id="syncer-acdn-01" class="syncer-acdn-child topics">
		<li><router-link to="/page1_page1_page1" data-id = "点数集計を楽に" class = "topics ch">●点数集計を楽に</router-link></li>
		<li><router-link to="/page1_page1_page2" data-id = "一括でメッセージ送信" class = "topics ch">●一括でメッセージ送信</router-link></li>
		<li><router-link to="/page1_page1_page3" data-id = "チーム分けの自動化" class = "topics ch">●チーム分けの自動化</router-link></li>
		<li><router-link to="/page1_page1_page4" data-id = "ランク振り分けの自動化" class = "topics ch">●ランクの振り分けの自動化</router-link></li>
		<li><router-link to="/page1_page1_page5" data-id = "トーナメント表の自動生成" class = "topics ch">●トーナメント表の自動生成</router-link></li>
	</ul>	
<li><router-link to="/page1_page2" class ="syncer-acdn topics" data-target="syncer-acdn-03" data-id = "簡単にセキュリティ的に優秀なサーバーを">▼簡単にセキュリティ的に優秀なサーバーを</router-link></li>
<ul type = "none" id="syncer-acdn-03" class="syncer-acdn-child">
<li><router-link to="/page1_page2_page1" class = "topics ch" data-id = "サーバーの設定をコマンド一つで解決">●サーバーの設定をコマンド一つで解決</router-link></li>    
<li><router-link to="/page1_page2_page2" class = "topics ch" data-id = "一括で役職を与え自動で剥奪">●一括で役職を与え自動で剥奪</router-link></li>
</ul>
</ul>
<router-link to="/page2" class = "topics ch" data-id = "導入方法">▼導入方法</router-link><br>
<router-link to="/page3" class = "topics ch" data-id = "Q&A">▼Q&A</router-link><br>
<router-link to="/page4" class ="syncer-acdn topics" data-target="syncer-acdn-06" data-id = "コマンド一覧">▼コマンド一覧</router-link><br>
<ul type = "none" id="syncer-acdn-06" class="syncer-acdn-child">
<li><router-link to="/page4_page1" class ="syncer-acdn topics" data-target="syncer-acdn-04" data-id ="サーバー管理者のみが使えるコマンド">▼サーバーの管理者のみが使えるコマンド</router-link></li>
<ul type = "none" id="syncer-acdn-04" class="syncer-acdn-child">
	<li><router-link to="/page4_page1_page1" class = "topics ch" data-id = "$initの使い方">●$init</router-link></li>
<li><router-link to="/page4_page1_page2" class = "topics ch" data-id = "$shの使い方">●$sh</router-link></li>
<li><router-link to="/page4_page1_page3" class = "topics ch" data-id = "$teamの使い方">●$team</router-link></li>
<li><router-link to="/page4_page1_page4" class = "topics ch" data-id = "$mvの使い方">●$mv</router-link></li>
<li><router-link to="/page4_page1_page5" class = "topics ch" data-id = "$sendの使い方">●$send</router-link></li>
<li><router-link to="/page4_page1_page6" class = "topics ch" data-id = "$showの使い方">●$show</router-link></li>
<li><router-link to="/page4_page1_page7" class = "topics ch" data-id = "$mapValの使い方">●$mapVal</router-link></li>
<li><router-link to="/page4_page1_page8" class = "topics ch" data-id = "$tの使い方">●$t</router-link></li>
<li><router-link to="/page4_page1_page9" class = "topics ch" data-id = "$aの使い方">●$a</router-link></li>
<li><router-link to="/page4_page1_page10" class = "topics ch" data-id = "$torの使い方">●$tor</router-link></li>
<li><router-link to="/page4_page1_page11" class = "topics ch" data-id = "$helpの使い方">●$help</router-link></li>
</ul>
<li><router-link to="/page4_page2" class ="syncer-acdn topics" data-target="syncer-acdn-05" data-id ="一般ユーザーも使えるコマンド">▼一般ユーザーも使えるコマンド</router-link></li>
<ul type = "none" id="syncer-acdn-05" class="syncer-acdn-child">
<li><router-link to="/page4_page2_page1" class = "topics ch" data-id = "!addの使い方">●!add</router-link><br></li>
<li><router-link to="/page4_page2_page2" class = "topics ch" data-id = "!subの使い方">●!sub</router-link><br></li>
<li><router-link to="/page4_page2_page3" class = "topics ch" data-id = "!mulの使い方">●!mul</router-link><br></li>
<li><router-link to="/page4_page2_page4" class = "topics ch" data-id = "!divの使い方">●!div</router-link><br></li>
</ul>
</ul>
</div>

    </div">
<div id = "mar" class="border-bottom"><h2></h2></div>
<div id = "content">
	<div id = "topic"class = "md-col-12 border-bottom">
<div class = "node" id = "topic_content">
<h1>SHINKBOTとは？</h1>
</div>
</div>
<div id = "tex" style = "margin-top:1rem;height:76%;overflow: hidden;">

<transition mode=”out-in”>
  	  <router-view></router-view>
</transition>
</div>
ここに広告を挿入
	</div>
<p><a id = "tog"  style="color: inherit;position:absolute;right:5vw;top:1vh;width:5vw;"><img src="@/assets/shinku.png" alt="次へ" style = "" width ="34vh" height ="45vh"></a></p>
 
<!-- <button style = "position:absolute;">a</button> -->
</div>
</template>
<script>
export default {
  name: 'App'
}

$(function()
{
	$( '.syncer-acdn' ).click( function()
	{
		var x = $(this).html().charAt(0)
		var target = $( this ).data( 'target' ) ;
		$( '#' + target ).slideToggle() ;
		if(x == "▼"){
			x = "▲"
			
		}else{
			x = "▼"
		}
		$(this).html(x + $(this).html().substr(1));
/*
		if(document.body.clientWidth<580){
$( "#side"  ).css("display", "none");

$( "#content" ).css("display", "block");
}
*/
		return false ;
	} ) ;
	$("#tog").click( function()
	{

		if($( "#side" ).css("display") == "none"){
		$( "#side" ).css("display", "block");
//$( "#tog" ).css("color", "white");
	$( "#content" ).css("display", "none");
}else{
$( "#side"  ).css("display", "none");

$( "#content" ).css("display", "block");
}

		return false ;
	} ) ;
	$( '.topics' ).click( function()
	{
		if(typeof $(this).data('id') == "undefined"){return false}
		$("#topic_content").html("<h1>" + $(this).data('id') + "</h1>");
		return false ;
	} ) ;
	$( '.ch' ).click( function()
	{
		if(document.body.clientWidth<580){
$( "#side"  ).css("display", "none");

$( "#content" ).css("display", "block");
}
		return false ;
	} ) ;


}) ;

</script>

<!--スタイルの指定をします-->
<style>

html {
  font-size: 10%;
}
:root{
    --font-family-sans-serif: "Helvetica Neue", Helvetica, Arial, "游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

body {
    font-family: "Helvetica Neue", Helvetica, Arial, "游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Helvetica Neue", Helvetica, Arial, "游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", Meiryo, 'Open Sans', sans-serif;
}
h1, h2{
font-size:3vh;
}
#side{
position:absolute;
display:none
}
#tog{
width:100%
}
video{
width:100%;
}

@media screen and (min-width:580px) {
h1,h2{
font-size:4vh;
}
#tog{
display:none;
}
  html {
    font-size: 1.4vh;
  }
video{

}
#side{
position:relative;
display:block;
}
#content{
display:block;
}

}
@media screen and (min-width: 768px) {
  html {
    font-size: 1.4vh;
  }
video{

}
#side{
display:inline-block;
position:relative;
}
#tex{
width:80%;
}

}
@media screen and (min-width: 1024px) {
  html {
    font-size: 1.4vh;
  }
video{
height:60vh;
width:initial;
}

#side{
display:inline-block;
position:relative;
}
}
#topic_content{
width:90%;
}
video{

}
body{
overflow:hidden;
}
#topic{
height:10vh;
width:98%;
}

#topic h2{
}

#mar{
width:2%;
}
.syncer-acdn-child
{
	display: none ;
}

ul{
margin-top:0px;
margin-bottom:0px;
}
#tex{
width:98%;
}
.node{
  position: relative;
  top: 50%;
  -webkit-transform : translateY(-50%);
  transform : translateY(-50%);
}
#side {
height:100vh;
overflow: hidden;
}
#side a{
color:white;
text-decoration: none;
}
#side a {
  display: inline-block;
  position: relative;
  overflow: hidden;
  color: #fff;
  text-decoration: none;
}

#side a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
  transform: translate(-100%, 0);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
  content: "";
}

#side a:hover:after {
  transform: translate(0, 0);
}

#start{
display: block;
content: "";
height: 15vh;
}
#content{
width:100%;
top-margin:1vh;
}
#topic{
}

.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 0.5s 0.5s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
</style>