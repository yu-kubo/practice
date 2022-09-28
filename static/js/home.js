// particle.jsにオプションを追加する自作js
// particle.jsを使用するcanvasタグのheightは300px以上
$("#title-canvas").particleText({
  text: "Pixel<br>Normalize<br>Apart", // 表示させたいテキスト。改行の場合は<br>追加
  colors: ["#F54064","#F5D940", "#18EBF2"], // パーティクルの色を複数指定可能
  speed: "middle",  // slow, middle, high の3つから粒子が集まる速さを選択
});