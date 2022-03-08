
$(document).ready(function(){
    $('#but_search').on('click', function(){
        let search_val = search_btn.value;
        let output = ''
        console.log(search_val);
        $.ajax({
            url:'/home/',
            method: 'POST',
            data : {"search_val": search_val},
            success: function(data){
                console.log('yess deone' , data.data)
                console.log(data.image)
                let image = data.image
                let search_result_data = data.data
                console.log(search_result_data )
                if( typeof search_result_data == 'undefined' ){
                    console.log('noo has data in folder')
                    output = ` <div class="d-flex justify-content-center">
                    <img id="" class="mx-5 srch_gif" src="{% static 'images/loader.gif' %}" alt="" height="250px"
                        style="position: absolute;">
                    </div>`
                    document.getElementById('baar').innerHTML = output

                    
                }
                else{
                        $('#baar').hide('5000')
                        console.log('yesss data has been')
                        $('.srch_gif').remove();
                        // $('#baar').html(search_result_data)
                        let card = `
                    <span>Total images found</span>
        <div class="row">
            
            <div class="col-sm-2">
                <div class="card m-2">
                    <img src="/media/all_image/${image.url}" alt="" class="card-img-top" height="200px">
                </div>
                <div class="card-footer">
                    <small class="text-muted"></small>
                </div>
            </div>
            
           
        </div>
                        `
                        $('.card_jpg').html(card)
                }
                // output = ` <div class="d-flex justify-content-center">
                //      <img id="" class="mx-5 srch_gif" src="{% static 'images/loader.gif' %}" alt="" height="250px"
                //          style="position: absolute;">
                //      </div>`
                //      document.getElementById('baar').innerHTML = output
                //      if( typeof search_result_data == 'undefined'){
                //          console.log('no data found')
                //         //  document.getElementById('baar').innerHTML = output
                //      }
                //      else{
                //          document.getElementById('baar').style.display = 'none'
                //          console.log(search_result_data)
                //      }
 

            }
        })
    })






    // $("#but_search").click(function () {
    //   var item_search = $("#search_btn").val();
    //   console.log(item_search);

    //   $.ajax({
    //       url: "/",
    //       type: 'get',
    //       data: {
    //           item_search:item_search
    //       },

    //       beforeSend:function(response){
    //           $('.loader').show();
    //       },
    //       success:function(response){
    //           $('.response').empty();
    //           $('.response').append(response)
    //       },
    //       complete:function(data){
    //           $('.loader').hide();
    //       }   

    //   })
    //     if (item_search == ''){
    //         $(".srch_gif").removeClass('d-none')
    //     } else {
    //         $(".srch_gif").addClass('d-none');
    //     }
    //     });
})



// // // $(document).on("click", "#search_btn", function (event) {
// // //     var item_search = $(this).val();
// // //     console.log(item_search)
// // // });

// console.log('hello')
// const loading = document.getElementById('loader')
// const all_data = document.getElementById("images")

// $.ajax({
//     url: '/',
//     type: 'GET',
//     success: function(res){
//         console.log('suucess');
        

//     },
//     error:function(es){
//         console.log('error')
//     },
// })



