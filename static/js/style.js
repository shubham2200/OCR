
$(document).ready(function(){
    $('#but_search').on('click', function(){
        let search_val = search_btn.value;
        let output = ''
        console.log(search_val);
        $.ajax({
            url:'/',
            method: 'POST',
            data : {"search_val": search_val},
            success: function(data){
                console.log('yess deone' , data.data)
                console.log(data.image)
                let image_data = data.image
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
                        console.log(image_data,'gchhvvh')
                        for(i in image_data ){
                            console.log(image_data[i])
                                 let card = `
    
                           
                                
                                <div class="col">    
                                    <div class="card m-2">
                                        <img id="img_${i}"  src="/media/all_image/${image_data[i]}" alt="" class="card-img-top img_big" height="200px">
                                        
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted"></small>
                                    </div>
                                
                                    </div>
                        
                            `
                            $('.card_jpg').append(card)
                            $('.img_big').on('click', function(){
                                let large_img = document.getElementsByClassName("img_big")
                                console.log(large_img,'kjaxca')
                                // $(this).height(900).width(900)
                               let x =  $("#full-image").attr("src", $(this).attr("src"));
                               let y = document.getElementById('full-image_2'); 
                               $('#full-image_2').attr("src" , $(y).attr("src"));
                               console.log(y)
                                $('#image-viewer').show();
                                // $('#image-viewer').show();  

                            // let modalImg = x.find('.modal-content');
                            // console.log(modalImg)
                        
                                
                                

                            })
                            $("#image-viewer .close").click(function(){
                                $('#image-viewer').hide();
                              });
                        
                        }
                        
                        // for(let i = 0; i < search_result_data.length; i++){

                        //     let card = `
    
                        //     <span>Total images found</span>
                        //     <div class="row">
                        
                        //         <div class="col-sm-2">
                        //             <div class="card m-2">
                        //                 <img src="/media/all_image/${search_result_data[i]}" alt="" class="card-img-top" height="200px">
                        //             </div>
                        //             <div class="card-footer">
                        //                 <small class="text-muted"></small>
                        //             </div>
                        //         </div>
                        //     </div>
                        
                        //     `
                        //     $('.card_jpg').html(card)
                        //     // $('.card_jpg').html(`<img src="/media/all_image/"  class="card-img-top" height="200px">`)
                        
                            
                    
                        // // $('#baar').html(search_result_data)
                        // }
                            
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



