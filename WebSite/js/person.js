$(document).ready(function () {
    $('#person').bootstrapTable({
        url: 'Default.aspx?method=FetchData',
        onLoadSuccess: function (res) {//�ɲ�д
            //���سɹ�ʱ
            console.log("onLoadSuccess");
            console.log(res);
        },
        onLoadError: function (statusCode) {
            console.log("onLoadError");
            console.log(statusCode);
            return "onLoadError";
        },
        formatLoadingMessage: function () {
            //���ڼ���
            console.log("formatLoadingMessage");
            return "formatLoadingMessage...";
        },
        formatNoMatches: function () {
            //û��ƥ��Ľ��
            console.log("formatNoMatches");
            return 'formatNoMatches';
        },
        pageSize: 10,
        columns: [
            {
                field: "ID",
                title: "ID",
            },
            {
                field: "Name",
                title: "Name",
            },
            {
                field: "Sex",
                title: "Sex",
            },
        ],
    });
});