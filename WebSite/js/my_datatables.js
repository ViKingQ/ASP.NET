//var dataSet = 
//[
//    [1001,"ZhangSan","Male"],
//    [1002,"LiSi","Female"],
//];

$(document).ready(function () {
    $('#my_datatables').DataTable({
//        data: dataSet,
//        columns: [
//            { title: "��ʶID" },
//            { title: "����" },
//            { title: "�Ա�" },
//        ],
        serverSide: true,
        ajax: {
            url: 'data/array.txt',
            //type: 'POST',
        },
    });
});