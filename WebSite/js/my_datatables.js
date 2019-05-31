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
        serverSide: true, //���÷������˷�ҳ
        searching: false, //����ԭ������
        orderMulti: false, //���ö�������
        order: [], //ȡ��Ĭ�������ѯ,����ѡ��һ�л����С��ͷ
        renderer: "bootstrap", //��Ⱦ��ʽ��Bootstrap��jquery-ui
        pagingType: "simple_numbers", //��ҳ��ʽ��simple,simple_numbers,full,full_numbers
        columnDefs: [{
            "targets": 'nosort', //�е���ʽ��
            "orderable": false //��������ʽ����nosort'�Ľ�ֹ����
        }],

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
                url: "DataTables.aspx?method=FetchData",
                cache: false, //���û���
                data: param, //������װ�Ĳ���
                dataType: "json",
                success: function (result) {
                    //��װ��������
                    console.log("success");
                    console.log(data);
                    console.log(result);
                    //����DataTables�ṩ��callback���������������ѷ�װ��ɲ�����DataTables������Ⱦ
                    //��ʱ��������ȷ����ȷ�����쳣�ж�Ӧ��ִ�д˻ص�ǰ���д������
                    callback(result);
                },
                error:function(data){
                    console.log("error");
               		console.log(data);
                },
            });
        },
    });
});