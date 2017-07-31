$(document).ready(function(){
    var table = $('#data-table').DataTable({
        "ajax" : "records.json",
         "columns" : [
            {  "data" : "name" },
            {  "data" : "designation" },
            {  "data" : "nationality" }
        ],        
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "sort" : true,
        "searching" : true,
        "scrollY"  : "400px"
        
    });
    //Individual Column search
    $('#data-table tfoot th').each(function(){
        var title = $('#data-table thead th').eq($(this).index()).text();
        $(this).html( '<input type="text" placeholder="Search ' + title +'" />' );
    });
        table.columns().every( function () {
        var that = this;

        $(this.footer() ).on( 'keyup change', function () {
        that.search(this.value).draw();
        } );
    } );

    // Show/hide Columns
    $('.showHideColumn').on( 'click', function () { 
        // Get the column API object
        var column = table.column( $(this).attr('data-columnindex') ); 
        // Toggle the visibility
        column.visible( ! column.visible() );
    } );   
});