// 获取选中的文档
var selectedDoc = app.activeDocument;
// 获取图层
var layer = selectedDoc.activeLayer;
// 获取选中文档的名称
var docName = selectedDoc.name;

// 获取画布大小
var canvasWidth = selectedDoc.width;
var canvasHeight = selectedDoc.height;

// 修改画布大小为新尺寸
var newWidth = selectedDoc.width; // 设置新的画布宽度
var newHeight = canvasHeight+10; // 设置新的画布高度

selectedDoc.resizeCanvas(newWidth, newHeight, AnchorPosition.TOPCENTER);

// 创建一个新的文本图层
var textLayer = selectedDoc.artLayers.add();
textLayer.kind = LayerKind.TEXT;

// 设置文本内容为文档名称
var textItem = textLayer.textItem;
textItem.contents = "文件名：" + docName;
alert(selectedDoc.height);
// 将文本图层定位于画布中心
// textLayer.translate(selectedDoc.width / 2, selectedDoc.height-selectedDoc.height/3);
// textLayer.translate(0, 0);
// 设置文本位置为图层的右下角
var bounds = layer.bounds;
var textX = bounds[2].value; // 获取图层右边缘的x坐标
var textY = bounds[3].value; // 获取图层底边缘的y坐标
textItem.position = [textX*0.8, textY+8]; // 设置文本位置
