<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form id="uploadForm"
		action="${pageContext.request.contextPath}/uploadfile" method="post"
		enctype="multipart/form-data">
		<input type="file" name="uploadfile" id="uploadFile"
			style="position: absolute; top: 0px; width: 0px" />
	</form>
	<input type="button" value="上传" id="btn" />
</body>
<script src="/Myweb/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript">
        $(function () {
            //按钮的点击事件
            $('#btn').click(function () {
                //触发file的点击事件
                $('#uploadFile').click();
            });
            //file的change事件
            $('#uploadFile').change(function () {
                //提交form表单的数据
                $('#uploadForm').submit();
　　　　　　　　　//清空file标签的value，否则再次提交此文件时，onchange事件就不触发了
　　　　　　　　　$('#uploadFile').val(''); 
　　　　　　　　}); 
　　　　}); 
</script>
</html>