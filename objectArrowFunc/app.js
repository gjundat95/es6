var blog = {
    domain: "jundat95.com",
    showWebsite: function(callBackFunc){
        callBackFunc();
    },
    render: function(){
        this.showWebsite(function(){
            console.log(this.domain);
        }.bind(this));
    }
}

var blogArrow = {
    domain: "jundat95.com",
    showWebsite: function(callBackFunc){
        callBackFunc();
    },
    render: function(){
        this.showWebsite(()=>{console.log(this.domain)});
    }
}

blogArrow.render();
console.log("hello");
