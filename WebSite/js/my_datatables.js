//var dataSet = 
//[
//    [1001,"ZhangSan","Male"],
//    [1002,"LiSi","Female"],
//];

//$(function () {
//    //��ʾ��Ϣ
//    var lang = {
//       "sProcessing": "������...",
//       "sLengthMenu": "ÿҳ _MENU_ ��",
//       "sZeroRecords": "û��ƥ����",
//       "sInfo": "��ǰ��ʾ�� _START_ �� _END_ ��� _TOTAL_ �",
//       "sInfoEmpty": "��ǰ��ʾ�� 0 �� 0 ��� 0 ��",
//       "sInfoFiltered": "(�� _MAX_ ��������)",
//       "sInfoPostFix": "",
//       "sSearch": "����:",
//       "sUrl": "",
//       "sEmptyTable": "��������Ϊ��",
//       "sLoadingRecords": "������...",
//       "sInfoThousands": ",",
//       "oPaginate": {
//       "sFirst": "��ҳ",
//       "sPrevious": "��ҳ",
//       "sNext": "��ҳ",
//       "sLast": "ĩҳ",
//       "sJump": "��ת"
//    },
//    "oAria": {
//        "sSortAscending": ": ���������д���",
//        "sSortDescending": ": �Խ������д���"
//    }
// };

$(document).ready(function () {
    $('#my_datatables').DataTable({   
//        data: dataSet,
//        columns: [
//            { title: "��ʶID" },
//            { title: "����" },
//            { title: "�Ա�" },
//        ],
//        language:lang, //��ʾ��Ϣ
        autoWidth: false, //�����Զ������п�
        stripeClasses: ["odd", "even"], //Ϊ��ż�м�����ʽ�����ݲ�֧��CSSα��ĳ���
        processing: true, //���ؼ�����ʾ,���д���
        serverSide: false, //���÷������˷�ҳ
        searching: false, //����ԭ������
        orderMulti: false, //���ö�������
        order: [], //ȡ��Ĭ�������ѯ,����ѡ��һ�л����С��ͷ
        renderer: "bootstrap", //��Ⱦ��ʽ��Bootstrap��jquery-ui
        pagingType: "simple_numbers", //��ҳ��ʽ��simple,simple_numbers,full,full_numbers
        columnDefs: [{
            "targets": 'nosort', //�е���ʽ��
            "orderable": false //��������ʽ����nosort'�Ľ�ֹ����
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
            //��װ�������
            var param = {};
            param.limit =data.length;//ҳ����ʾ��¼��������ҳ����ʾÿҳ��ʾ�������ʱ��
            param.start = data.start;//��ʼ�ļ�¼���
            param.page = (data.start / data.length)+1;//��ǰҳ��
            //ajax��������
            $.ajax({
                type: "GET",
                //url: "data/array.txt",
                url: "DataTables.aspx?method=QueryData",
                cache: false, //���û���
                data: param, //������װ�Ĳ���
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