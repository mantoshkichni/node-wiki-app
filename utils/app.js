const request=require('request')
const wikipedia=(address,callback)=>{
    const url='https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+encodeURIComponent(address)+' &utf8=&format=json'
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            callback(error,undefined)
    
        }
        else{
        //    const count=response.body.query.search.length;
        //    for(let i=0;i<count;i++)
        //    {
        //     console.log(response.body.query.search[i].title);
        //     console.log(response.body.query.search[i].snippet);
        //    }
        callback(undefined,response);
            
        }
    })
}
module.exports=wikipedia;
