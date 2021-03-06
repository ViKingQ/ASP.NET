//var dataSet = 
//[
//    [1001,"ZhangSan","Male"],
//    [1002,"LiSi","Female"],
//];

//$(function () {
//    //提示信息
//    var lang = {
//       "sProcessing": "处理中...",
//       "sLengthMenu": "每页 _MENU_ 项",
//       "sZeroRecords": "没有匹配结果",
//       "sInfo": "当前显示第 _START_ 至 _END_ 项，共 _TOTAL_ 项。",
//       "sInfoEmpty": "当前显示第 0 至 0 项，共 0 项",
//       "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
//       "sInfoPostFix": "",
//       "sSearch": "搜索:",
//       "sUrl": "",
//       "sEmptyTable": "表中数据为空",
//       "sLoadingRecords": "载入中...",
//       "sInfoThousands": ",",
//       "oPaginate": {
//       "sFirst": "首页",
//       "sPrevious": "上页",
//       "sNext": "下页",
//       "sLast": "末页",
//       "sJump": "跳转"
//    },
//    "oAria": {
//        "sSortAscending": ": 以升序排列此列",
//        "sSortDescending": ": 以降序排列此列"
//    }
// };

$(document).ready(function () {
    $('#my_datatables').DataTable({   
//        data: dataSet,
//        columns: [
//            { title: "标识ID" },
//            { title: "名字" },
//            { title: "性别" },
//        ],
//        language:lang, //提示信息
        autoWidth: false, //禁用自动调整列宽
        stripeClasses: ["odd", "even"], //为奇偶行加上样式，兼容不支持CSS伪类的场合
        processing: true, //隐藏加载提示,自行处理
        serverSide: false, //启用服务器端分页
        searching: false, //禁用原生搜索
        orderMulti: false, //启用多列排序
        order: [], //取消默认排序查询,否则复选框一列会出现小箭头
        renderer: "bootstrap", //渲染样式：Bootstrap和jquery-ui
        pagingType: "simple_numbers", //分页样式：simple,simple_numbers,full,full_numbers
        columnDefs: [{
            "targets": 'nosort', //列的样式名
            "orderable": false //包含上样式名‘nosort'的禁止排序
        }],

        columns: [
            { "data": "id" },
            { "data": "firstname" },
            { "data": "lastname" },
            { "data": "position" },
            { "data": "office" },
            { "data": "age" },
            { "data": "startdate" },
            { "data": "salary" },
            { "data": "extn" },
            { "data": "email" },
        ],

        ajax: function (data, callback, settings) {
            //封装请求参数
            var param = {};
            param.limit =data.length;//页面显示记录条数，在页面显示每页显示多少项的时候
            param.start = data.start;//开始的记录序号
            param.page = (data.start / data.length)+1;//当前页码
            //ajax请求数据
            $.ajax({
                type: "GET",
                //url: "data/array.txt",
                url: "DataTables.aspx?method=QueryData",
                cache: false, //禁用缓存
                data: param, //传入组装的参数
                dataType: "json",
                success: function (result) {
                    var resultdata = {};
                    resultdata.draw = data.draw;
                    resultdata.recordsTotal = 0;
                    resultdata.recordsFiltered = 0;
                    resultdata.data = result.Table;
                    callback(resultdata);
                },
                error:function(data){
                    console.log("error");
               		console.log(data);
                },
            });
        },
    });
});